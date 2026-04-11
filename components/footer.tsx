  import Link from "next/link"
  import Image from "next/image"

  const navigation = {
    main: [
      { name: "Services", href: "#services" },
      { name: "Process", href: "#process" },
      { name: "Results", href: "#results" },
      { name: "About", href: "#about" },
    ],
    contact: [
      { name: "hello@sinclairhayes.com", href: "mailto:hello@sinclairhayes.com" },
      { name: "maximillianaustin@ucsb.edu", href: "mailto:maximillianaustin@ucsb.edu" },
      { name: "Call Us", href: "tel:+15598596415" },
    ],
  }

  export function Footer() {
    return (
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logo.png"
                  alt="Sinclair Hayes"
                  width={40}
                  height={40}
                  className="brightness-0 invert"
                  style={{ height: 40, width: "auto" }}
                />
                <span className="font-semibold text-lg tracking-tight">
                  Sinclair Hayes
                </span>
              </div>
              <p className="text-sm opacity-70 max-w-xs">
                High-conversion digital infrastructure for trades businesses.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <ul className="space-y-2">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                {navigation.contact.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8">
            <p className="text-sm opacity-70 text-center">
              &copy; {new Date().getFullYear()} Sinclair Hayes. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    )
  }
