import React from "react";

const Table = () => {
  return (
    <section>
      <div className="xl:max-w-screen-lg mx-auto px-5 my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-10">
          <div className="flex justify-center items-center">
            <div>
              <h2 className="font-extrabold text-2xl">
                Individualized Approach
              </h2>

              <p className="mt-6 text-base text-black">
                We help you comprehend how to be a competitive applicant and
                personalize our guidance to suit your needs. In fact, we help
                you make a unique application that helps you stand out
              </p>
            </div>
          </div>

          <div className="overflow-hidden bg-white drop-shadow-2xl rounded-xl">
            <div className="pb-5">
              <h3 className="w-4/5 text-lg p-5 mx-auto">
                Our students are 2.5x more likely to be admitted to a top 50
                college or university
              </h3>

              <div className="w-5/6 text-xs text-center mx-auto rounded-tl-2xl rounded-tr-2xl overflow-hidden">
                <table className="w-full">
                  <thead className="text-white text-xs">
                    <tr className="bg-[#0a1d36]">
                      <th className="p-3">Institution</th>
                      <th className="p-3">Location</th>
                    </tr>
                  </thead>
                  <tbody className=" bg-white text-black">
                    <tr>
                      <td className="px-3 py-2">
                        <p>The New School</p>
                      </td>
                      <td className="px-8 py-2">
                        <span>New York, NY</span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className=" bg-[#F3FCF6] text-black">
                    <tr>
                      <td className="px-3 py-2">
                        <p>University of Rochester</p>
                      </td>
                      <td className="px-8 py-2">
                        <span>Rochester, NY</span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className=" bg-white text-black">
                    <tr>
                      <td className="px-3 py-2">
                        <p>New York University</p>
                      </td>
                      <td className="px-8 py-2">
                        <span>New York, NY</span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className=" bg-[#F3FCF6] text-black">
                    <tr>
                      <td className="px-3 py-2">
                        <p>Boston University</p>
                      </td>
                      <td className="px-8 py-2">
                        <span>Boston, MA</span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className=" bg-white text-black">
                    <tr>
                      <td className="px-3 py-2">
                        <p>Carnegie Mellon University</p>
                      </td>
                      <td className="px-8 py-2">
                        <span>Pittsburgh, PA</span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className=" bg-[#F3FCF6] text-black">
                    <tr>
                      <td className="px-3 py-2">
                        <p>Cardinal Stritch University</p>
                      </td>
                      <td className="px-8 py-2">
                        <span>Milwaukee, WI</span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className=" bg-white text-black">
                    <tr>
                      <td className="px-3 py-2">
                        <p>Brandeis University</p>
                      </td>
                      <td className="px-8 py-2">
                        <span>Waltham, MA</span>
                      </td>
                    </tr>
                  </tbody>
                  <tbody className=" bg-[#F3FCF6] text-black">
                    <tr>
                      <td className="px-3 py-2">
                        <p>Florida Institute of Technology</p>
                      </td>
                      <td className="px-8 py-2">
                        <span>Melbourne, FL</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
