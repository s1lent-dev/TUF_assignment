import { InstagramLogo, XLogo, LinkedinLogo, YoutubeLogo } from "@phosphor-icons/react";
const Insta = (size: number) => <InstagramLogo size={size} className="svg" weight="fill"/>;
const Twitter = (size: number) => <XLogo size={size} className="svg" weight="fill"/>;
const Linkedin = (size: number) => <LinkedinLogo size={size} className="svg" weight="fill"/>;
const Youtube = (size: number) => <YoutubeLogo size={size} className="svg" weight="fill"/>;

export { Insta, Twitter, Linkedin, Youtube };