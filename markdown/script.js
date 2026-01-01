const markDownInput = document.querySelector("#markdown-input");
const htmlOutput = document.querySelector("#html-output");
const preview = document.querySelector("#preview");

markDownInput.addEventListener("input", () => convertMarkdown());

const h1Regex = /^# (.+$)/gm;
const h2Regex = /^## (.+$)/gm;
const h3Regex = /^### (.+$)/gm;
const boldRegex = /[\*_][\*_](.+?)[\*_][\*_]/g;
const italicRegex = /[\*_](.+?)[\*_]/g;
const imgRegex = /!\[(.*)\]\((.*)\)/g;
const linkRegex = /\[(.*)\]\((.*)\)/g;
const quoteRegex = /^[quote|>] (.+$)/gm;
function convertMarkdown() {
  let output = markDownInput.value;
  output = output.replace(h1Regex, "<h1>$1</h1>");
  output = output.replace(h2Regex, "<h2>$1</h2>");
  output = output.replace(h3Regex, "<h3>$1</h3>");
  output = output.replace(boldRegex, "<strong>$1</strong>");
  output = output.replace(italicRegex, "<em>$1</em>");
  output = output.replace(imgRegex, "<img src='$2' alt='$1'>");
  output = output.replace(linkRegex, "<a href='$2'><p>$1</p></a>");
  output = output.replace(quoteRegex, "<blockquote>$1</blockquote>");
  htmlOutput.textContent = output;
  preview.innerHTML = output;
  return output;
}
