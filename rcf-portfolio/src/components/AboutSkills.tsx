import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const AboutSkills = () => {
  const skills = [
    {
      title: "Desenvolvimento",
      items: [
        "Blazor", "Bootstrap", "C#", "CSS", "JavaScript", "NextJS",
        "ReactJS", "SQL Server", "Tailwind", "TypeScript", "Redux",
        "Zustand", "Shadcn"
      ].sort(),
    },
    {
      title: "Metodologias",
      items: ["Azure", "Jira", "Kanban", "Scrum"].sort(),
    },
    {
      title: "Outros",
      items: ["Proficiência em Inglês (Nível B2)"].sort(),
    },
  ];

  return (
    <div>
      <h2 className="font-medium text-2xl">Habilidades</h2>
      <div className="grid w-full grid-cols-2 gap-12">
        <div className="col-span-1">
          {skills.map((category, index) => (
            <Accordion key={index} collapsible type="single">
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>{category.title}</AccordionTrigger>
                <AccordionContent>
                  <ul>
                    {category.items.map((skill, idx) => (
                      <li key={idx} className="list-disc list-inside">{skill}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        <div className="col-span-1">
          <img src="/rcf-skills.jpg" height={600} width={600} />
        </div>
      </div>
    </div>
  );
};

export default AboutSkills;
