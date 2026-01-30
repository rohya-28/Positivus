import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { HeroImage, Amazon, Dribble, HubSpot, Netflix, Notion, Zoom, LogoMain } from './assets';
import { Navbar, Button } from './components';
import { servicesData, processSteps, testimonials } from './constants/services';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [openStep, setOpenStep] = useState(1);
  const [active, setActive] = useState(0);

  return (
    <div className="bg-surface font-space min-h-screen">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-20 text-center md:text-left">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="flex flex-col items-center md:items-start">
            <h1 className="text-dark text-6xl leading-tight font-bold md:text-7xl">
              Navigating the digital landscape <br /> for success
            </h1>

            <div className="my-8 aspect-[4/3] w-full md:hidden">
              <img
                src={HeroImage}
                alt="Hero Illustration"
                className="h-full w-full object-contain"
              />
            </div>

            <p className="text-dark/80 mt-6 max-w-lg text-xl">
              Our digital marketing agency helps businesses grow and succeed online through a range
              of services.
            </p>

            <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
              <Button variant="secondary">Book a consultation</Button>
            </div>
          </div>

          <div className="hidden aspect-video w-full items-center justify-center md:flex">
            <img src={HeroImage} alt="Hero Illustration" className="h-full w-full object-contain" />
          </div>
        </div>
      </main>

      {/* Social Proof Section */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-wrap items-center justify-center gap-8 md:justify-between md:gap-12">
          {/* Each Logo Wrapper */}
          <div className="cursor-pointer opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
            <img src={Amazon} alt="Amazon" className="h-8 w-auto md:h-10" />
          </div>

          <div className="cursor-pointer opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
            <img src={Dribble} alt="Dribbble" className="h-8 w-auto md:h-10" />
          </div>

          <div className="cursor-pointer opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
            <img src={HubSpot} alt="Hubspot" className="h-8 w-auto md:h-10" />
          </div>

          <div className="cursor-pointer opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
            <img src={Notion} alt="Notion" className="h-8 w-auto md:h-10" />
          </div>

          <div className="cursor-pointer opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
            <img src={Netflix} alt="Netflix" className="h-8 w-auto md:h-10" />
          </div>

          <div className="cursor-pointer opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0">
            <img src={Zoom} alt="Netflix" className="h-8 w-auto md:h-10" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-24">
        <div className="mb-16 flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:gap-10 md:text-left">
          <h2 className="bg-brand font-space shrink-0 rounded-lg px-2 text-[2.5rem] leading-none font-medium">
            Services
          </h2>
          <p className="max-w-[580px] text-lg leading-snug">
            At our digital marketing agency, we offer a range of services to help businesses grow
            and succeed online. These services include:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`border-dark hover:bg-brand group mx-auto flex min-h-[322px] w-full max-w-[430px] flex-col justify-between rounded-[45px] border p-8 shadow-[0_5px_0_0_#191A23] transition-all duration-300 hover:-translate-y-1 md:min-h-[310px] md:max-w-[600px] md:p-[50px] ${
                index % 3 === 0 ? 'bg-white' : index % 3 === 1 ? 'bg-brand' : 'bg-dark'
              }`}
            >
              <div className="flex w-full items-start justify-between gap-2">
                <div className="flex flex-col">
                  {service.title.split(' ').map((word, i) => (
                    <span
                      key={i}
                      className={`font-space w-fit rounded-lg px-1.5 text-[1.6rem] leading-tight font-medium md:text-[1.8rem] ${
                        index % 3 === 1 ? 'bg-white' : 'bg-brand'
                      } group-hover:bg-white`}
                    >
                      {word}
                    </span>
                  ))}
                </div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="mt-20 w-[140px] object-contain md:w-[210px]"
                />
              </div>

              <a href={service.link} className="group/link flex items-center gap-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-transform group-hover/link:rotate-45 ${
                    index % 3 === 2 ? 'text-dark bg-white' : 'bg-dark text-brand'
                  }`}
                >
                  <ArrowUpRight size={24} />
                </div>
                <span
                  className={`hidden text-xl font-medium md:block ${
                    index % 3 === 2 ? 'text-white' : 'text-dark'
                  }`}
                >
                  Learn more
                </span>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="font-space mx-auto max-w-7xl px-6 py-12 md:py-24">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center gap-6 md:flex-row md:gap-10">
          <h2 className="bg-brand shrink-0 rounded-lg px-2 text-4xl font-medium">
            Our Working Process
          </h2>
          <p className="max-w-[300px] text-center text-lg leading-tight md:text-left">
            Step-by-Step Guide to Reaching Your Business Goals
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-6">
          {processSteps.map((step) => {
            const isOpen = openStep === step.id;

            return (
              <div
                key={step.id}
                className={`border-dark rounded-[45px] border shadow-[0_5px_0_0_#191A23] transition-all duration-300 ${isOpen ? 'bg-brand' : 'bg-white'}`}
              >
                <button
                  onClick={() => setOpenStep(isOpen ? null : step.id)}
                  className="flex w-full items-center justify-between p-8 md:p-10"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-3xl font-medium md:text-6xl">0{step.id}</span>
                    <span className="text-left text-xl font-medium md:text-3xl">{step.title}</span>
                  </div>

                  <div className="border-dark flex h-10 w-10 items-center justify-center rounded-full border bg-white shadow-sm transition-transform md:h-14 md:w-14">
                    {isOpen ? <Minus size={30} /> : <Plus size={30} />}
                  </div>
                </button>

                {/* Animated Content Expansion */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-8 pb-10 md:px-10">
                    <div className="bg-dark mb-6 h-[1px] w-full opacity-20"></div>
                    <p className="text-lg leading-relaxed md:text-xl">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="font-space mx-auto max-w-7xl px-6 py-12 md:py-24">
        <div className="mb-16 flex flex-col items-center gap-6 md:flex-row md:gap-10">
          <h2 className="bg-brand shrink-0 rounded-lg px-2 text-4xl font-medium">Testimonials</h2>
          <p className="max-w-[500px] text-center text-lg leading-tight md:text-left">
            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital
            Marketing Services
          </p>
        </div>
        <div className="bg-dark relative overflow-hidden rounded-[45px] px-4 py-12 text-white md:p-20">
          {/* Carousel Container */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-4xl">
              {testimonials.map((t, i) => (
                <div key={t.id} className={`${i === active ? 'block' : 'hidden'} animate-fadeIn`}>
                  {/* Speech Bubble */}
                  <div className="border-brand relative mb-12 rounded-[45px] border p-8 md:p-12">
                    <p className="text-lg leading-relaxed italic md:text-xl">{t.text}</p>
                    {/* Bubble Pointer (The Triangle) */}
                    <div className="bg-dark border-brand absolute -bottom-4 left-12 h-8 w-8 rotate-45 transform border-r border-b md:left-20"></div>
                  </div>

                  {/* Author Info */}
                  <div className="pl-12 md:pl-20">
                    <h4 className="text-brand text-xl font-medium">{t.author}</h4>
                    <p className="text-white/80">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="md: mt-16 flex w-full max-w-xl max-w-xs items-center justify-between gap-6">
              <button
                onClick={() =>
                  setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
                }
                className="hover:text-brand text-2xl text-white transition-colors"
              >
                <ArrowLeft />
              </button>
              <div className="flex gap-8">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-3 w-3 rounded-none transition-all ${i === active ? 'bg-brand' : 'bg-white'}`}
                  />
                ))}
              </div>
              <button
                onClick={() =>
                  setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
                }
                className="hover:text-brand text-2xl text-white transition-colors"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-6">
        <div className="bg-dark rounded-t-[45px] p-10 text-white md:p-14">
          {/* Top Section: Logo & Socials */}
          <div className="flex flex-col items-center justify-between gap-8 border-b border-white/20 pb-10 md:flex-row">
            <div className="flex items-center gap-2 text-3xl font-bold">
              <div className="" />
              <img src={LogoMain} alt="" className="" />
            </div>

            <div className="my-8 flex flex-col gap-4 text-center md:my-0 md:flex-row md:gap-10 md:text-left">
              {['About us', 'Services', 'Use Cases', 'Pricing', 'Blog'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="text-white underline transition-colors hover:text-[#B9FF66] md:no-underline md:hover:underline"
                >
                  {link}
                </a>
              ))}
            </div>

            <div className="flex gap-4">
              {['Linkedin', 'Twitter', 'Facebook'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-dark hover:bg-brand flex h-8 w-8 items-center justify-center rounded-full bg-white transition-colors"
                >
                  {/* You can swap these with Lucide icons */}
                  <span className="text-xs">In</span>
                </a>
              ))}
            </div>
          </div>

          {/* Middle Section: Info & Subscribe */}
          <div className="flex flex-col items-center justify-between gap-10 py-12 lg:flex-row">
            <div className="space-y-4 text-center lg:text-left">
              <span className="bg-brand text-dark rounded-md px-2 font-medium">Contact us:</span>
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>Address: 1234 Main St, Moonstone City, Starlight State 44</p>
            </div>

            <div className="flex w-full flex-col gap-4 rounded-[14px] bg-[#292A32] p-8 md:flex-row lg:max-w-[600px]">
              <input
                type="email"
                placeholder="Email"
                className="focus:border-brand w-full rounded-lg border border-white bg-transparent px-4 py-3 outline-none"
              />
              <button className="bg-brand text-dark rounded-lg px-20 py-3 font-medium transition-colors hover:bg-white">
                Subscribe to news
              </button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col items-center gap-4 border-t border-white/10 pt-8 md:flex-row">
            <p>© 2026 Positivus. All Rights Reserved.</p>
            <a href="#" className="underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
