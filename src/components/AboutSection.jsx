import { ArrowUpLeftFromSquareIcon, BarChartBigIcon, Briefcase, ClipboardCheckIcon, Code, Dice1, GeorgianLariIcon, RefreshCcwDotIcon, User } from "lucide-react";

export const AboutSection = () => {
    return (
    <section id="about" className="py-24 px-4 relative"> 
    {" "}
    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary"> Me </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"> 
            <div className="space-y-6"> 
                <h3 className="text-2xl font-semibold"> Passionate Data Analyst</h3>
                <p className="text-muted-foreground justify-center"> 
                    With over two years of experience in data analytics, I turn complex data into actionable insights.
                    I help organizations measure performance, evaluate growth, and drive impact across health systems, public sector programs, and innovation ecosystems.
                    I thrive at the intersection of data and strategy, delivering results that matter through evidence-based decision-making and performance-driven frameworks.
                </p>

                <p className="text-muted-foreground"> 
                    I’m driven by the power of data to solve real-world problems. 
                    I love uncovering insights that improve performance, guide evidence-based decisions, and create meaningful impact across health,
                    policy, and innovation ecosystems.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                    <a href="#contact" className="cosmic-button">  
                        {" "}
                        Get In Touch
                    </a>

                    <a href="/projects/Umezinwa_John_CV.pdf" className="px-6 py-2 rounded-full border-primary text-primary hover:bg-primary/10 transition-colors duration-300">  
                        {" "}
                        Download CV
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6"> 
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4"> 
                        <div className="p-3 rounded-full bg-primary/10"> 
                            <BarChartBigIcon className="h-6 w-6 text-primary"/>
                     </div>
                     <div className="text-left"> 
                        <h4 className="font-semibold text-lg"> Data Analytics</h4>
                        <p> Through data analytics and dashboarding, 
                            I uncover insights and drive better decisions across health and innovation sectors.</p>
                     </div>
                </div>
             </div>
                <div className="gradient-border p-6 card-hover"> 
                    <div className="flex items-start gap-4"> 
                        <div className="p-3 rounded-full bg-primary/10"> 
                    <ClipboardCheckIcon className="h-6 w-6 text-primary"/>
                     </div>
                     <div className="text-left"> 
                        <h4 className="font-semibold text-lg"> Monitoring & Evaluation</h4>
                        <p> I design M&E systems that track growth, performance, and impact,
                            helping organizations make stronger, evidence-based strategic decisions.</p>
                     </div>
                </div>
             </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4"> 
                         <div className="p-3 rounded-full bg-primary/10"> 
                            <RefreshCcwDotIcon className="h-6 w-6 text-primary"/>
                     </div>
                     <div className="text-left"> 
                        <h4 className="font-semibold text-lg"> Data Systems & Automation </h4>
                        <p> Leveraging data automation to enhance workflows, reporting, and organizational decision-making. </p>
                     </div>
                </div>
            </div>
            </div>
            </div>
            </div>
    </section>
    );
};