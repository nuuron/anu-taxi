import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FOOTER_CONTACT_INFO, SOCIALS } from "../constants";

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className=" flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <div className="flex flex-wrap gap-6 sm:justify-between md:flex-1">
            <div className="rounded-2xl overflow-hidden">
              <iframe
                width="100%"
                height="250"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Anu%20Tour%20and%20Taxi%20Guwahati%20Assam%20Tawang%20Shillong%20Kaziranga+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              ></iframe>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap">{link.label}:</p>
                    <p className="medium-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.sites.map((site) => (
                    <Link href={site.href} key={site.link} target="_blank">
                      <Image
                        src={site.icon}
                        alt="logo"
                        width={24}
                        height={24}
                      />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">
          Made by Rushad and Anuran
        </p>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
