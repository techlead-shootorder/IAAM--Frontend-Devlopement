'use client';

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { dropdownData, DropdownDataItem } from "@/lib/dropdownData";

interface MainNavProps {
  mobileMenuOpen: boolean;
}

export default function MainNav({ mobileMenuOpen }: MainNavProps) {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems = [
    "Membership",
    "Meetings & Events",
    "Innovation & Sustainability",
    "Journals & Proceedings",
    "Awards & Recognitions",
    "Discover IAAM",
  ];

  const handleMouseEnter = (index: number) => {
    // Clear any pending timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    // Immediately show dropdown - yeh instantly change hoga
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Short delay before closing - user ko dropdown tak jaane ka time milega
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // 1500ms se 200ms kar diya - ab fast close hoga
  };

  const closeDropdown = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(null);
  };

  return (
    <>
      {/* ================= DESKTOP NAV ================= */}
      <nav className="hidden lg:block w-full bg-white border-b border-border relative">
        <div className="max-w-[1440px] mx-auto px-[30px]">
          <ul className="flex items-center justify-between h-[48px]">
            {navItems.map((item, index) => {
              return (
                <li key={item} className="relative h-full flex items-center">
                  <button
                    type="button"
                    className="font-semibold text-[15px] text-iaam-text-dark hover:text-iaam-primary transition-colors flex items-center gap-1 px-2 py-2"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item}
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${
                        activeDropdown === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === index && (
                    <div
                      className="fixed left-0 right-0 top-[220px] w-full bg-white z-50 border-b border-border max-h-[calc(100vh-220px)] overflow-y-auto shadow-sm"
                      onMouseEnter={() => {
                        // Dropdown pe hover karne se timeout cancel ho jayega
                        if (timeoutRef.current) {
                          clearTimeout(timeoutRef.current);
                          timeoutRef.current = null;
                        }
                      }}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="max-w-[1440px] mx-auto px-[30px] py-[25px]">
                        <DropdownContent data={dropdownData[activeDropdown]} />
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* ================= MOBILE NAV ================= */}
        {mobileMenuOpen && (
          <nav className="lg:hidden bg-white border-b border-border">
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item, index) => (
                <MobileNavItem
                  key={item}
                  title={item}
                  data={dropdownData[index]}
                />
              ))}
            </div>
          </nav>
        )}
      </nav>

      {/* ================= MOBILE NAV ================= */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-white border-b border-border">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item, index) => (
              <MobileNavItem
                key={item}
                title={item}
                data={dropdownData[index]}
              />
            ))}
          </div>
        </nav>
      )}
    </>
  );
}

/* ================= DESKTOP DROPDOWN CONTENT ================= */

const DropdownContent = ({ data }: { data: DropdownDataItem }) => {
  return (
    <div className="flex gap-[30px] pb-4 items-stretch">
      {/* LEFT CARD */}
      <div className="w-[30%] flex-shrink-0 bg-iaam-bg-gray rounded overflow-hidden">
        <div className="h-[300px] bg-white overflow-hidden relative">
          <Image
            src={
              data.card.image.startsWith("http")
                ? data.card.image
                : `/${data.card.image}`
            }
            alt={data.card.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-[8px] pt-[24px] flex flex-col gap-6">
          <div>
            <h3 className="font-bold text-[20px] text-iaam-text-dark leading-tight tracking-[0.3px]">
              {data.card.title}
            </h3>

            <p className="text-[12px] text-iaam-text-body leading-[17px] mt-2">
              {data.card.description}
            </p>
          </div>

          <button className="w-full py-[10px] px-[8px] bg-iaam-primary text-white font-medium text-[18px] rounded-[3px] shadow-md hover:brightness-110 transition">
            {data.card.cta}
          </button>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex-1 flex flex-col gap-8 min-w-0">
        <div>
          <h2 className="font-bold text-[24px] text-iaam-text-dark tracking-[0.36px]">
            {data.title}
          </h2>

          <p className="text-[18px] text-iaam-text-body leading-[25px] mt-4">
            {data.description}
          </p>
        </div>

        {(data.outlineCta || data.rightLinks) && (
          <div className="flex justify-between items-start w-full">
            {data.outlineCta && (
              <button className="py-[16px] px-[8px] border border-iaam-primary text-iaam-primary font-medium text-[16px] rounded-[3px] hover:bg-iaam-primary hover:text-white transition">
                {data.outlineCta}
              </button>
            )}

            {data.rightLinks && (
              <div className="flex flex-col gap-4 text-right">
                {data.rightLinks.map((rl) => (
                  <a
                    key={rl.header}
                    href="#"
                    className="font-bold text-[18px] text-iaam-primary hover:underline"
                  >
                    {rl.header}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}

        {data.title === "Meeting & Events" && (
          <div className="w-full py-[9px] px-[8px] bg-iaam-primary">
            <span className="font-roboto font-semibold text-[18px] text-white tracking-[0.27px]">
              Guideline for Abstract Submission & Conference Registration​
            </span>
          </div>
        )}

        <div className="flex gap-7 w-full">
          {data.columns.map((column, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-7 flex-1 min-w-0">
              {column.map((section, secIdx) => (
                <div key={secIdx} className="flex flex-col gap-3">
                  <h4 className="font-bold text-[18px] text-iaam-section-header">
                    {section.header}
                  </h4>

                  {section.links && (
                    <div className="flex flex-col gap-4">
                      {section.links.map((link, linkIdx) => (
                        <a
                          key={linkIdx}
                          href="#"
                          className="text-[16px] text-iaam-link-light hover:underline hover:text-iaam-primary transition-colors"
                        >
                          {link}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ================= MOBILE NAV ITEM ================= */

const MobileNavItem = ({
  title,
  data,
}: {
  title: string;
  data: DropdownDataItem;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        type="button"
        className="w-full flex items-center justify-between py-3 px-2 font-semibold text-[16px] text-iaam-text-dark"
        onClick={() => setOpen((prev) => !prev)}
      >
        {title}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="px-2 pb-4 space-y-4">
          <p className="text-[14px] text-iaam-text-body">
            {data.description}
          </p>

          {data.columns.map((column, colIdx) => (
            <div key={colIdx} className="space-y-3">
              {column.map((section, secIdx) => (
                <div key={secIdx}>
                  <h5 className="font-bold text-[14px] text-iaam-section-header">
                    {section.header}
                  </h5>

                  {section.links && (
                    <div className="ml-2 mt-1 space-y-1">
                      {section.links.map((link, i) => (
                        <a
                          key={i}
                          href="#"
                          className="block text-[13px] text-iaam-link-light hover:underline"
                        >
                          {link}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};