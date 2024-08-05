"use client";
import "@/styles/InstallLink.scss";
interface ComponentProps {
  name: string;
  iconLink: string;
  command: string;
  npmLink: string;
  gitLink: string;
}

const InstallLink: React.FC<ComponentProps> = ({
  name,
  iconLink,
  command,
  npmLink,
  gitLink,
}) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      alert("Command copied!");
    } catch (error) {
      console.error(`Cannot copy: ${error}`);
    }
  };
  return (
    <div className="InstallLinkComponent">
      <div className="top-wrapper">
        <h2 className="title">{name}</h2>
        <img className="techIcon" src={iconLink} alt="" />
      </div>
      <p className="command-wrapper">
        <span className="command">{command}</span>
        <img
          className="icon"
          src="/keycap.svg" //! <--- placeholder icon, replace asap
          alt=""
          onClick={handleCopy}
        />
      </p>
      <p className="links-wrapper">
        <a title="NPM page" href={npmLink} className="link">
          <img className="link-icon" src="/icon--npm.svg" alt="" />
        </a>
        <a title="GitHub repository" href={gitLink} className="link">
          <img className="link-icon" src="/icon--github.svg" alt="" />
        </a>
      </p>
    </div>
  );
};

export default InstallLink;
