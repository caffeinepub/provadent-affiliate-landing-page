import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { footerCopy } from '@/content/provadentCopy';

export default function FooterSection() {
  return (
    <footer className="bg-slate-900 py-12 text-slate-300">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Links */}
          <div className="mb-8 flex flex-wrap justify-center gap-6 text-sm">
            <Dialog>
              <DialogTrigger className="text-teal-400 hover:text-teal-300 underline">
                Privacy Policy
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{footerCopy.privacyPolicy.title}</DialogTitle>
                </DialogHeader>
                <ScrollArea className="h-96 pr-4">
                  <div className="whitespace-pre-line text-sm leading-relaxed text-slate-700">
                    {footerCopy.privacyPolicy.content}
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger className="text-teal-400 hover:text-teal-300 underline">
                Terms & Conditions
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>{footerCopy.termsConditions.title}</DialogTitle>
                </DialogHeader>
                <ScrollArea className="h-96 pr-4">
                  <div className="whitespace-pre-line text-sm leading-relaxed text-slate-700">
                    {footerCopy.termsConditions.content}
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </div>

          <Separator className="my-8 bg-slate-700" />

          {/* Copyright */}
          <div className="text-center text-sm">
            <p>
              © 2026. Built with ❤️ using{' '}
              <a 
                href="https://caffeine.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-teal-400 hover:text-teal-300 underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
