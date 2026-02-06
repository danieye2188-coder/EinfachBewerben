type Data = {
  name: string;
  jobTitle: string;
  company: string;
  experience: string;
};

export function generateLetter(data: Data) {
  return `Sehr geehrte Damen und Herren,

mit großem Interesse habe ich Ihre Stellenausschreibung als ${data.jobTitle} gelesen.
Die Position bei ${data.company} spricht mich besonders an, da sie sehr gut zu meinen
beruflichen Erfahrungen und meinem Interesse an einer verantwortungsvollen Tätigkeit passt.

In meiner bisherigen Laufbahn konnte ich insbesondere im Bereich ${data.experience}
wertvolle praktische Erfahrungen sammeln. Dabei habe ich gelernt, strukturiert zu arbeiten,
Verantwortung zu übernehmen und Aufgaben zuverlässig sowie lösungsorientiert umzusetzen.

Ich schätze ein professionelles Arbeitsumfeld, arbeite gern im Team und bringe mich
engagiert in neue Aufgaben ein. Meine Motivation, mich fachlich weiterzuentwickeln
und aktiv zum Erfolg Ihres Unternehmens beizutragen, ist dabei ein wichtiger Antrieb.

Gerne würde ich meine Stärken und meine Motivation in einem persönlichen Gespräch
näher erläutern und freue mich über eine Einladung.

Mit freundlichen Grüßen
${data.name}`;
}

