import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/assets/images/swLogo.png';
import dashboard_ss from '@/public/assets/images/dasboard_ss.png';
import { auth } from '@/lib/better-auth/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (session?.user) redirect('/');

  return (
    <main className="auth-layout">
      <section className="auth-left-section scrollbar-hide-default">
        <Link
          href="/"
          className=" text-black flex justify-center items-center "
        >
          <Image
            src={logo}
            alt="stock-watcher logo"
            width={140}
            height={50}
            className="h-10 w-auto cursor-pointer py-0"
          />
          <span className=" text-2xl mt-1 font-bold font-serif">
            Stock-Watcher
          </span>
        </Link>

        <div className="pb-6 lg:pb-8 flex-1">{children}</div>
      </section>

      <section className="auth-right-section">
        <div className="z-10 relative lg:mt-4 lg:mb-16">
          <blockquote className="auth-blockquote">
            stock-watcher help me to transformed my watchlist into a winning
            list. The alerts give me continuous updates, and I feel more
            confident making moves in the market
          </blockquote>
          <div className="flex items-center justify-between">
            <div>
              <cite className="auth-testimonial-author">- Tony Stark</cite>
              <p className="max-md:text-xs text-gray-500">
                Domestic Institutional Investor
              </p>
            </div>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Image
                  src="/assets/icons/star.svg"
                  alt="Star"
                  key={star}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 relative">
          <Image
            src={dashboard_ss}
            alt="Dashboard Preview"
            width={1440}
            height={1150}
            className="auth-dashboard-preview absolute top-0"
          />
        </div>
      </section>
    </main>
  );
};
