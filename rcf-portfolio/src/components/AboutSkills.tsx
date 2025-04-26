const AboutSkills = () => {
  const skills = [
    {
      title: "Desenvolvimento",
      items: [
        "Angular", "Blazor", "Bootstrap", "C#", "CSS", "JavaScript", "NextJS",
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
    <div className="bg-accent p-6 rounded-4xl">
      <h1 className="font-medium text-2xl mb-4">Habilidades</h1>
      <div className="space-y-4">
        {skills.map((category, index) => (
          <div key={index}>
            <h2 className="font-semibold text-lg mb-1">{category.title}</h2>
            <p className="text-base">
              {category.items.join(" • ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSkills;
