import { Instagram, Linkedin, Mail, MapPin, TwitterIcon } from "lucide-react";
import { cn } from "../lib/utils";

export const ContactSection = () => {

    const handleSubmit = (e) => {
        e.preventDefault()

        setTimeout(() => {

        }, 1500)
    }
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span> Touch</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm Always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 gap-12">
                    <div className="space-y-8 flex flex-col items-center text-center">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                        {/* Card containing Email and Location */}
                        <div className="w-full md:w-3/4 mx-auto">
                            <div className="bg-card/60 backdrop-blur-sm border border-gray-800 rounded-lg shadow-md p-6">
                                {/* On desktop: two columns; on mobile: stacked */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                                    <div className="flex-1 flex flex-col items-center md:flex-row md:items-center md:space-x-4 text-center md:text-left">
                                        <div className="w-12 h-12 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Mail className="h-6 w-6 text-primary" />
                                        </div>
                                        <div className="mt-3 md:mt-0">
                                            <h4 className="font-medium mb-1">Email</h4>
                                            <a href="mailto:umezinwa19@gmail.com"
                                               className="text-muted-foreground hover:text-primary transition-colors block">
                                                umezinwa19@gmail.com
                                            </a>
                                        </div>
                                    </div>

                                    <div className="flex-1 flex flex-col items-center md:flex-row md:items-center md:space-x-4 text-center md:text-left">
                                        <div className="w-12 h-12 flex-shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                                            <MapPin className="h-6 w-6 text-primary" />
                                        </div>
                                        <div className="mt-3 md:mt-0">
                                            <h4 className="font-medium mb-1">Location</h4>
                                            <span className="text-muted-foreground hover:text-primary transition-colors block">
                                                Abuja, Nigeria.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="pt-8">
                                <h4 className="font-medium mb-4">Connect With Me</h4>
                                <div className="flex space-x-4 justify-center">
                                    <a target="_blank" rel="noreferrer" href="http://linkedin.com/in/johnumezinwa">
                                        <Linkedin />
                                    </a>
                                    <a target="_blank" rel="noreferrer" href="https://x.com/_chigemezu">
                                        <TwitterIcon />
                                    </a>
                                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/_chigemezu/">
                                        <Instagram />
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};