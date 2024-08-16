import Image from "next/image";
import s1 from "../../../../public/stock-1.jpg";
import s2 from "../../../../public/stock-3.jpg";
import Emphasis from "@/components/ui/emphasis";
import { Card, CardContent } from "@/components/ui/card";
export default function ChangeItUp() {
  return (
    <section className=" bg-neutral-950 text-white pt-10 pb-32">
        <div className="container flex justify-between h-full">
          <div className="space-y-4">
            <div>
              <ChefIcon className="h-40 w-auto" />
              <h2 className="text-7xl font-semibold">
                <Emphasis>Change</Emphasis> it up
              </h2>
            </div>

            <p className="max-w-md text-lg text-white/70 font-medium text-justify">
              Keep your taste buds entertained every week by finding and trying
              one of the <span className="italic underline">10,000+</span> recipes available! If you have ever gotten stuck figuring out what to
              cook on a Monday night, this is the place for you.
            </p>
          </div>
          <section className="grid grid-cols-3 grid-rows-7 gap-6 max-w-2xl">
            <Card className="row-span-3 border-none overflow-hidden">
              <CardContent className="p-0 h-full">
                <Image src={s1} alt="" className="h-full object-cover" />
              </CardContent>
            </Card>
            <Card className="col-start-1 row-start-4 row-span-3 border-none overflow-hidden">
              <CardContent className="p-0 h-full">
                <Image src={s2} alt="" className="h-full object-cover" />
              </CardContent>
            </Card>
            <Card className="col-start-2 row-start-2 row-span-3 border-none overflow-hidden">
              <CardContent className="p-0 h-full">
                <Image src={s2} alt="" className="h-full object-cover" />
              </CardContent>
            </Card>
            <Card className="col-start-2 row-start-5 row-span-3 border-none overflow-hidden">
              <CardContent className="p-0 h-full">
                <Image src={s1} alt="" className="h-full object-cover" />
              </CardContent>
            </Card>
            <Card className="row-span-3 border-none overflow-hidden">
              <CardContent className="p-0 h-full">
                <Image src={s1} alt="" className="h-full object-cover" />
              </CardContent>
            </Card>
            <Card className="row-start-4 row-span-3 border-none overflow-hidden">
              <CardContent className="p-0 h-full">
                <Image src={s2} alt="" className="h-full object-cover" />
              </CardContent>
            </Card>
          </section>
        </div>
      </section>
  )
}

function ChefIcon({ className }: { className?: string }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="-5.0 -10.0 110.0 135.0"
        fill="#ffffff"
        className={className}
      >
        <g>
          <path d="m68.301 52.102c-1.8984 2.8984-2 6.6016-0.10156 9.6016l0.5 0.80078c0.39844 0.60156 1 0.89844 1.6016 0.89844 0.30078 0 0.69922-0.10156 1-0.30078 0.89844-0.60156 1.1016-1.6992 0.60156-2.6016l-0.5-0.80078c-1.1016-1.6992-1-3.8008 0.10156-5.3984l0.60156-0.89844c2.1016-3.1992 2-7.3008-0.39844-10.301-0.60156-0.80078-1.8008-0.89844-2.6016-0.30078-0.80078 0.60156-0.89844 1.8008-0.30078 2.6016 1.3984 1.6992 1.5 4.1016 0.19922 5.8984z" />
          <path d="m77.5 52.102c-1.8984 2.8984-2 6.6016-0.10156 9.6016l0.5 0.80078c0.39844 0.60156 1 0.89844 1.6016 0.89844 0.30078 0 0.69922-0.10156 1-0.30078 0.89844-0.60156 1.1016-1.6992 0.60156-2.6016l-0.5-0.80078c-1.1016-1.6992-1-3.8008 0.10156-5.3984l0.60156-0.89844c2.1016-3.1992 2-7.3008-0.39844-10.301-0.69922-0.80078-1.8008-0.89844-2.6016-0.30078-0.80078 0.60156-0.89844 1.8008-0.30078 2.6016 1.3984 1.6992 1.5 4.1016 0.19922 5.8984z" />
          <path d="m86.801 52.102c-1.8984 2.8984-2 6.6016-0.10156 9.6016l0.5 0.80078c0.39844 0.60156 1 0.89844 1.6016 0.89844 0.30078 0 0.69922-0.10156 1-0.30078 0.89844-0.60156 1.1016-1.6992 0.60156-2.6016l-0.5-0.80078c-1.1016-1.6992-1-3.8008 0.10156-5.3984l0.60156-0.89844c2.1016-3.1992 2-7.3008-0.39844-10.301-0.60156-0.80078-1.8008-0.89844-2.6016-0.30078-0.80078 0.60156-0.89844 1.8008-0.30078 2.6016 1.3984 1.6992 1.5 4.1016 0.19922 5.8984z" />
          <path d="m92.398 86.5h-53.5c-1 0-1.8984 0.80078-1.8984 1.8984 0 1.1016 0.80078 1.8984 1.8984 1.8984h53.5c1 0 1.8984-0.80078 1.8984-1.8984 0.003906-1.0977-0.89844-1.8984-1.8984-1.8984z" />
          <path d="m40.801 80.199h8.5c4.1016 0 7.3984-3.3008 7.3984-7.3984 0-0.5-0.10156-1-0.10156-1.5h8.4023l2.5 8c0.19922 0.80078 1 1.3008 1.8008 1.3008h20.199c0.80078 0 1.5-0.5 1.8008-1.3008l2.8984-9.3008c0.19922-0.60156 0.10156-1.1992-0.30078-1.6992-0.39844-0.5-0.89844-0.80078-1.5-0.80078h-37.898c-1.3008-1.3008-3.1992-2.1992-5.1992-2.1992h-7.1016l-6.6016-6.6992c-1.5-1.5-3.1992-2.6992-5.1992-3.3984 3.6016-2.3984 6-6.5 6-11.199 0-0.69922 0-1.3984-0.10156-2-0.19922-1-1.1016-1.6992-2.1992-1.5-1 0.19922-1.6992 1.1016-1.5 2.1992 0.10156 0.5 0.10156 0.89844 0.10156 1.3984 0 5.3008-4.3008 9.6992-9.6992 9.6992-5.3008 0-9.6992-4.3008-9.6992-9.6992 0-0.5 0-0.89844 0.10156-1.3984 0.19922-1-0.5-2-1.5-2.1992-1-0.19922-2 0.5-2.1992 1.5-0.10156 0.69922-0.10156 1.3008-0.10156 2 0 4.3984 2.1992 8.3008 5.5 10.699-4 1.6016-6.8984 5.5-6.8984 10.102v30.602c0 1 0.80078 1.8984 1.8984 1.8984h21.199c0.5 0 1-0.19922 1.3008-0.60156 0.39844-0.39844 0.5-0.89844 0.5-1.3984l-0.5-18.305 1 0.80078c2.0977 1.5977 4.5977 2.3984 7.1992 2.3984zm49-8.8008-1.8008 5.5h-17.398l-1.8008-5.5zm-58.102 0.20312c-0.60156-0.39844-1.3984-0.5-2-0.19922-0.60156 0.30078-1 1-1 1.6992l0.60156 20.602-17.402-0.003906v-28.598c0-3.8984 3.1992-7.1992 7.1992-7.1992h5.3984c3.1992 0 6.1992 1.3008 8.3984 3.5l7.1016 7.1992c0.39844 0.39844 0.80078 0.60156 1.3008 0.60156h7.8984c2 0 3.6992 1.6016 3.6992 3.6992 0 2.1016-1.6016 3.6992-3.6992 3.6992h-8.5c-1.8008 0-3.5-0.60156-4.8984-1.6992z" />
          <path d="m12 24.199v10.801c0 1 0.80078 1.8984 1.8984 1.8984h18.199c1 0 1.8984-0.80078 1.8984-1.8984l0.003906-10.801c3.6016-1 6.3008-4.1992 6.3008-8.1992 0-5-4.5-9.1016-9.5-8.3984-1.3008-3-4.3008-5.1016-7.8008-5.1016-3.3984 0-6.3984 2.1016-7.8008 5.1016-5-0.60156-9.5 3.3984-9.5 8.3984 0 3.8984 2.6992 7.1992 6.3008 8.1992zm3.8984-12.598c0.5 0.19922 1.1016 0.10156 1.6016-0.10156 0.5-0.30078 0.80078-0.69922 0.89844-1.3008 0.39844-2.3008 2.3984-3.8984 4.6016-3.8984 2.3008 0 4.3008 1.6016 4.6992 3.8984 0.10156 0.5 0.39844 1 0.89844 1.3008s1.1016 0.30078 1.6016 0.10156c3.3008-1.1992 6.3984 1.3008 6.3984 4.3984 0 2.6016-2.1016 4.6992-4.6992 4.6992-0.80078 0-1.5-0.19922-2.1992-0.5-0.89844-0.5-2.1016-0.10156-2.5 0.80078-0.5 0.89844-0.10156 2.1016 0.80078 2.5 0.69922 0.39844 1.5 0.60156 2.3984 0.80078v8.8008h-14.598v-8.8008c0.80078-0.19922 1.6016-0.39844 2.3984-0.80078 0.89844-0.5 1.3008-1.6016 0.80078-2.5s-1.6016-1.3008-2.5-0.80078c-0.69922 0.30078-1.3984 0.5-2.1992 0.5-2.6016 0-4.6992-2.1016-4.6992-4.6992-0.10156-3.1992 3.0977-5.6016 6.2969-4.3984z" />
        </g>
        <text
          x="0.0"
          y="117.5"
          fontSize="5.0"
          fontWeight="bold"
          fontFamily="Arbeit Regular, Helvetica, Arial-Unicode, Arial, Sans-serif"
          fill="#000000"
        >
          Created by Adrien Coquet
        </text>
        <text
          x="0.0"
          y="122.5"
          fontSize="5.0"
          fontWeight="bold"
          fontFamily="Arbeit Regular, Helvetica, Arial-Unicode, Arial, Sans-serif"
          fill="#000000"
        >
          from Noun Project
        </text>
      </svg>
    );
  }