import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

const skills = [
    {name: "Excel/Google Spreadsheet", level: 80, category: "Data Analysis & Statistics"},
    {name: "SQL", level: 70, category: "Data Analysis & Statistics"},
    {name: "Python (Pandas, Matplotlib, NumPy)", level: 60, category: "Data Analysis & Statistics"},
    {name: "Exploratory Data Analysis", level: 80, category: "Data Analysis & Statistics"},
    {name: "Hypothesis Testing", level: 60, category: "Data Analysis & Statistics"},
    {name: "Trend & Growth Analysis ", level: 80, category: "Data Analysis & Statistics"},
    {name: "Stastical Modelling ", level: 80, category: "Data Analysis & Statistics"},

    {name: "Dashboard Development (Power BI / Looker Studio)", level: 80, category: "Data Visualization & Reporting"},
    {name: "KPI Tracking", level: 80, category: "Data Visualization & Reporting"},
    {name: "Executive Reporting", level: 80, category: "Data Visualization & Reporting"},
    {name: " Data Storytelling", level: 80, category: "Data Visualization & Reporting"},

    {name: "Google BigQuery", level: 80, category: "Data Systems & Automation"},
    {name: "Google Apps Script", level: 80, category: "Data Systems & Automation"},
    {name: "Data Pipeline Design", level: 80, category: "Data Systems & Automation"},
    {name: "Data Validation & Quality Control", level: 80, category: "Data Systems & Automation"},
    {name: "Process Optimization", level: 80, category: "Data Systems & Automation"},
];

const categories = [
  "Data Analysis & Statistics",
  "Data Visualization & Reporting",
  "Data Systems & Automation"
];

export const SkillSection = () => {
    // default to the first real category
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // trigger animations after mount
        const t = setTimeout(() => setMounted(true), 60);
        return () => clearTimeout(t);
    }, []);

    const filteredSkills = skills.filter(
        (skill) => skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-20 px-4 relative bg-secondary/30">
            <style>{`
                /* card entrance */
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .skill-card { opacity: 0; transform: translateY(10px); }
                .skill-card.is-mounted { animation: fadeUp 520ms cubic-bezier(.2,.9,.2,1) forwards; }

                /* subtle hover lift */
                .skill-card:hover { transform: translateY(-6px) scale(1.01); box-shadow: 0 18px 40px rgba(2,6,23,0.08); }

                /* animated progress bar handled via inline styles but ensure smoothness */
                .progress-inner { transition: width 900ms cubic-bezier(.2,.85,.2,1); }

                @media (prefers-reduced-motion: reduce) {
                    .skill-card, .progress-inner { animation: none; transition: none !important; transform: none !important; }
                }
            `}</style>

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                    Technical <span className="text-primary">Expertise</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-3 mb-8">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-4 py-1.5 rounded-full text-sm transition-all duration-200",
                                activeCategory === category
                                    ? "bg-primary text-primary-foreground shadow-md"
                                    : "bg-secondary/70 text-foreground hover:bg-secondary/90"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className={cn(
                                "skill-card bg-card p-4 rounded-lg shadow-sm transform-gpu",
                                mounted ? "is-mounted" : ""
                            )}
                            style={{ animationDelay: `${key * 80}ms` }}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="font-semibold text-sm sm:text-base">{skill.name}</h3>
                            </div>

                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div
                                    className="bg-primary h-2 rounded-full origin-left progress-inner"
                                    style={{ width: mounted ? `${skill.level}%` : "0%" }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
