import { Button } from "@/components/ui/button"
import { FileText, Github, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

const Header = () => {
  return (
         <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-center relative">
          <div className="flex items-center space-x-8">
            <a
              href="https://www.linkedin.com/in/sarathos584"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-full p-3">
                <Linkedin className="h-5 w-5 text-gray-700" />
              </Button>
            </a>
            <a
              href="https://www.instagram.com/sarath_rambler/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-full p-3">
                <Instagram className="h-5 w-5 text-gray-700" />
              </Button>
            </a>
            <a
              href="https://github.com/sarathos584"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-full p-3">
                <Github className="h-5 w-5 text-gray-700" />
              </Button>
            </a>
            <a
              href="https://medium.com/@sarathos584"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <Button variant="ghost" size="icon" className="hover:bg-gray-100 rounded-full p-3">
                <FileText className="h-5 w-5 text-gray-700" />
              </Button>
            </a>
          </div>
          <Button className="absolute right-0 bg-gray-900 text-white hover:bg-gray-800 rounded-full px-8 py-2">
            Contact Me
          </Button>
        </div>
      </header>
  )
}

export default Header
