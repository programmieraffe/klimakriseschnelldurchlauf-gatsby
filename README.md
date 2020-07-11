# Klimakrise🔥 Gatsby Clone

Dies ist eine 1:1 Kopie der Idee von [Matthias Andrasch](https://twitter.com/m_andrasch)'s Idee einer Info-Seite zur [ Klimakrise ](https://github.com/programmieraffe/klimakriseschnelldurchlauf) (s. [Tweet](https://twitter.com/m_andrasch/status/1272903989894447104?s=20)).

Ich habe lediglich die Art und Weise geändert, wie die Seite generiert wird. Statt den Inhalt in die `index.html` zu schreiben, habe ich das Projekt mit [Gatsby](https://www.gatsbyjs.org/) neu aufgesetzt und den Inhalt in eine Markdown-Datei überführt ([ `src/markdown/index.md` ](https://github.com/sroertgen/klimakrise/blob/master/src/markdown/index.md)). Damit ist die Barriere zur Nachnutzung eventuell noch etwas niedriger geworden.

Bei jedem Push in das Git-Repo wird eine Github-Action angetriggert, die die Seite aus der Markdown-Datei neu baut und in den `gh-pages`-Branch pusht. Diese wird dann über GitHub-Pages zur Verfügung gestellt.

Wie ich das ganze Projekt aufgesetzt habe, werde ich demnächst in einem gesonderten Blog-Post beschreiben.


## Setup

1. npm install -g gatsby-cli
Change to folder and execute
2. npm install
2. gatsby develop
