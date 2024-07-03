"use client";
import "@/styles/InstallLink.scss";
interface ComponentProps {
  name: string;
  command: string;
}

const InstallLink: React.FC<ComponentProps> = ({ name, command }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
    } catch (error) {
      console.error(`Cannot copy: ${error}`);
    }
  };
  return (
    <div className="InstallLinkComponent">
      <h2 className="title">{name}</h2>
      <p className="wrapper">
        <span className="command">{command}</span>
        <img
          className="icon"
          src="/copy.svg"
          alt="copy icon"
          onClick={handleCopy}
        />
      </p>
      <p className="wrapper">
        <a href="" className="link">
          <img className="link-icon" src="/npm.svg" alt="npm icon" />
        </a>
        <a href="" className="link">
          <img className="link-icon" src="/github.svg" alt="GitHub icon" />
        </a>
      </p>
    </div>
  );
};

export default InstallLink;
