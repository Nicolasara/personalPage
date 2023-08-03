interface props {
  language: string;
}

function LanguageText({ language }: props) {
  return <p>{language}</p>;
}

export default LanguageText;
