import { useState } from "react";
import { Calendar, Clock, Users, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const ReservationForm = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mrbyelwn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email, // Para permitir resposta direta ao email
          _gotcha: "", // Campo anti-spam
        }),
      });

      if (response.ok) {
        // Notificação de sucesso
        toast({
          title: t("reservation.toast.title"),
          description: t("reservation.toast.description"),
          variant: "default", // Ou "success" se o teu useToast suportar
        });

        // Reset do formulário
        setFormData({
          name: "",
          email: "",
          phone: "",
          date: "",
          time: "",
          guests: "",
          message: ""
        });
      } else {
        // Notificação de erro
        toast({
          title: t("reservation.toast.errorTitle") || "Erro no envio",
          description:
            t("reservation.toast.errorDescription") ||
            "Ocorreu um erro ao enviar o formulário. Tenta novamente.",
          variant: "destructive",
        });
      }
    } catch (error) {
      // Notificação de erro em caso de falha na rede
      toast({
        title: t("reservation.toast.errorTitle") || "Erro no envio",
        description:
          t("reservation.toast.errorDescription") ||
          "Ocorreu um erro ao enviar o formulário. Verifica a tua ligação.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <Card className="shadow-tropical-strong">
            <CardHeader>
              <CardTitle className="font-display text-2xl text-center">
                {t("reservation.formTitle")}
              </CardTitle>
              <CardDescription className="text-center">
                {t("reservation.formSubtitle")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit}
                action="https://formspree.io/f/mrbyelwn"
                method="POST"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t("reservation.fields.name.label")}</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={t("reservation.fields.name.placeholder")}
                      className="border-border focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">{t("reservation.fields.email.label")}</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={t("reservation.fields.email.placeholder")}
                      className="border-border focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">{t("reservation.fields.phone.label")}</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder={t("reservation.fields.phone.placeholder")}
                    className="border-border focus:ring-primary"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{t("reservation.fields.date.label")}</span>
                    </Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="border-border focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{t("reservation.fields.time.label")}</span>
                    </Label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      min="08:00"
                      max="18:00"
                      className="border-border focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guests" className="flex items-center space-x-2">
                      <Users className="h-4 w-4" />
                      <span>{t("reservation.fields.guests.label")}</span>
                    </Label>
                    <Input
                      id="guests"
                      name="guests"
                      type="number"
                      value={formData.guests}
                      onChange={handleChange}
                      required
                      min="1"
                      max="20"
                      placeholder={t("reservation.fields.guests.placeholder")}
                      className="border-border focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">{t("reservation.fields.notes.label")}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t("reservation.fields.notes.placeholder")}
                    rows={4}
                    className="border-border focus:ring-primary resize-none"
                  />
                </div>

                {/* Campo honeypot para prevenir spam */}
                <input type="text" name="_gotcha" style={{ display: "none" }} />

                <Button
                  type="submit"
                  className="w-full bg-tropical hover:bg-primary-dark text-white font-medium py-3"
                >
                  {t("reservation.confirmButton")}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Alternative Contact Methods */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <h3 className="font-display text-2xl font-semibold mb-4">
                {t("reservation.alt.title")}
              </h3>
              <p className="text-muted-foreground">
                {t("reservation.alt.description")}
              </p>
            </div>

            <div className="space-y-4">
              <Card className="hover:shadow-tropical transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                      <MessageCircle className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{t("reservation.alt.whatsapp.title")}</h4>
                      <p className="text-sm text-muted-foreground">{t("reservation.alt.whatsapp.subtitle")}</p>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent hover:text-white"
                    >
                      <a
                        href="https://api.whatsapp.com/send/?phone=351911759010&text=Olá, gostaria de fazer uma reserva&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Enviar Mensagem
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-tropical transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{t("reservation.alt.phone.title")}</h4>
                      <p className="text-sm text-muted-foreground">{t("reservation.alt.phone.subtitle")}</p>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <a href="tel:+351911759010">+351 911 75 90 10</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-secondary/20 rounded-lg p-6 mt-8">
              <h4 className="font-display font-medium mb-3">{t("reservation.info.title")}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• {t("reservation.info.bullet1")}</li>
                <li>• {t("reservation.info.bullet2")}</li>
                <li>• {t("reservation.info.bullet3")}</li>
                <li>• {t("reservation.info.bullet4")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;