import React from "react";
import Image from "next/image";


function NewsPage() {
  return (
    <div className="pt-16 bg-white">
      <div className=" max-w-screen-3xl mx-auto space-y-12 py-12">
        <div className="tracking-widest text-2xl">NEWS</div>
        <div className="text-7xl leading-tight text-gray-500">
          Lorem Ipsum is <br />
          simply dummy text of <br />
          the printing and.
        </div>
        <div className=" grid grid-cols-12" >
          <div className=" col-span-6 pe-16">
            <Image
              src="/news.png"
              height="800"
              width="1200"
              quality={100}
              alt="Background Image"
            />
          </div>
          <div className="col-span-5 ms-24 mt-60">
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi provident repellat corrupti
              fugit aut dolor magnam, voluptas id quam officia eaque officiis quo delectus ab voluptatibus
              repellendus rem ex, et in porro ducimus omnis similique. Magnam, quos modi iure esse itaque
              eligendi velit inventore temporibus pariatur recusandae, nam repellendus consectetur maxime
              tempore nobis quis eaque consequuntur veniam assumenda rerum fuga? Quos error dolorem,
              eligendi ducimus accusamus iure sapiente illum, corporis magni ab nemo voluptate minima,
              unde quis ipsam. Perferendis maiores debitis dolorem amet commodi rerum aspernatur dolor
              officiis magni exercitationem! Fuga, quos corporis consequuntur quod, sunt aperiam iure
              accusamus maiores obcaecati repellat eius blanditiis, animi asperiores dolorem fugiat? Quasi,
              debitis, repudiandae facere voluptatem itaque hic tempora non quae fugit explicabo praesentium
              doloremque modi. Et praesentium quisquam, iste sit voluptatem tenetur optio atque in.
            </div>
            <div className="mt-8">
              Officia fuga mollitia, saepe in deserunt tenetur ratione minus sapiente eligendi tempore, quae rerum
              incidunt. Maxime, porro eius? Blanditiis rem voluptas iste vitae, quam ad ratione animi deserunt
              odit deleniti et provident voluptatibus minima sit sunt dolor reiciendis illum.
            </div>
            <div className="mt-8">
              <button className="flex w-60 p-2 gap-5 text-black border-2 border-[#F01E2A] rounded-md justify-between items-center">
                <div className="text-lg font-bold ms-8">
                  Read More
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F01E2A"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 6l6 6l-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
