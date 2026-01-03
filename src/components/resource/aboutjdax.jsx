import { motion } from "framer-motion";
import React from "react";
import Jdax from "../../assets/jdax-main.png";
const AboutJDAX = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-[#431aa0] text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About JDAX: A Legacy of Service and Excellence
      </motion.h2>

      {/* Image next to the intro heading */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mx-auto mb-10 max-w-xl md:max-w-4xl"
      >
        <img
          src={Jdax} // Replace with your image path or import
          alt="JDAX Legacy"
          className="w-full rounded-lg shadow-lg object-cover"
        />
      </motion.div>

      {/* Content blocks */}
      <motion.div
        className="space-y-8 max-w-5xl mx-auto text-[#431aa0]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
      >
        {/* Split content into paragraphs with motion.div */}
        <motion.p className="text-lg md:text-xl font-semibold leading-relaxed">
          The Story Behind Our Name
        </motion.p>

        <motion.p className="text-gray-900 leading-relaxed">
          At JDAX Academy of Excellence, every letter of our name carries
          profound meaning. The 'JD' in JDAX honors Sir John Demonte, an
          extraordinary Portuguese merchant-philanthropist whose life story
          embodies the very values we strive to instill in our students:
          compassion, service, and unwavering commitment to the upliftment of
          society's most vulnerable.
        </motion.p>
        <motion.p className="text-lg md:text-xl font-semibold leading-relaxed">
          A Life of Prosperity and Tragedy
        </motion.p>
        <motion.p className="text-gray-900 leading-relaxed">
          John Demonte arrived in Chennai (then Madras) in the early 19th
          century from Pondicherry, bringing with him remarkable business acumen
          and an even more remarkable heart. Through his successful trading
          enterprises, he accumulated vast wealth and extensive landholdings
          that spanned prime locations in what is now some of Chennai's most
          prestigious real estate—from the Marina coastline to Mylapore,
          including properties where the iconic Madras Club and Boat Club stand
          today.
        </motion.p>

        <motion.p className="text-gray-900 leading-relaxed">
          He married Mary Bilderbeck from a prominent German family of pearl
          merchants, and together they welcomed their beloved son Christopher
          into the world. By every measure of his time, John Demonte was a man
          who had achieved extraordinary success—over 500 acres of prime land,
          flourishing businesses, a loving family, and the respect of his
          community.
        </motion.p>

        <motion.p className="text-gray-900 leading-relaxed">
          Yet life had prepared devastating trials for this devout Christian
          merchant.
        </motion.p>
        <motion.p className="text-lg md:text-xl font-semibold leading-relaxed">
          When Fortune Turned to Sorrow
        </motion.p>

        <motion.p className="text-gray-900 leading-relaxed">
          In 1810, sixteen-year-old Christopher departed for Europe to pursue
          higher education. An intellectually curious young man, he immersed
          himself in the cultural and political ferment of post-Napoleonic
          Europe. He attended the famous Ball that Lady Richmond hosted in
          Brussels for the Duke of Wellington on the eve of the Battle of
          Waterloo. A talented amateur guitarist, Christopher struck an unusual
          friendship with the renowned musician Mauro Giuliani, who gifted him a
          guitar that had once belonged to Empress Marie-Louise.
        </motion.p>

        <motion.p className="text-gray-900 leading-relaxed">
          But in 1816, just as he was preparing to return home to India, tragedy
          struck. Christopher died unexpectedly in Germany at the tender age of
          22—his promising life cut short just when it seemed ready to bloom.
          His mortal remains were sent back to his heartbroken parents in
          Madras.
        </motion.p>

        <motion.p className="text-gray-900 leading-relaxed">
          The loss shattered Mary Demonte. She descended into profound mental
          anguish, wandering the streets of Madras in her grief, her mind unable
          to bear the weight of losing her only child.
        </motion.p>

        <motion.p className="text-lg md:text-xl font-semibold leading-relaxed">
          From Grief to Grace: A Testament of Faith
        </motion.p>

        <motion.p className="text-gray-900 leading-relaxed">
          In his darkest hour, John Demonte did not retreat into bitterness or
          despair. Instead, he channeled his anguish into an extraordinary act
          of faith and service. According to local lore, Our Lady of Mount
          Carmel appeared to him with a promise: if he would complete a church
          that had stood unfinished for years in Kovalam (then Covelong), his
          wife would find peace.
        </motion.p>

        <motion.p className="text-gray-900 leading-relaxed">
          Demonte immediately set about the work. He built not only the
          magnificent Our Lady of Mount Carmel Church (completed in 1808), but
          also established a home for Mary in Kovalam, hoping the sea air and
          spiritual surroundings would soothe her troubled mind. He poured his
          grief into prayer and service, transforming personal tragedy into
          communal blessing.
        </motion.p>

        <motion.p className="text-lg md:text-xl font-semibold leading-relaxed">
          The Ultimate Act of Service
        </motion.p>
        <motion.p className="text-gray-900 leading-relaxed">
          When John Demonte passed away in 1821, he made a decision that would
          echo through the centuries. Rather than passing his vast wealth to
          distant relatives or business associates, he bequeathed his entire
          estate—over 105 acres of prime Chennai property—to the Archdiocese of
          Madras-Mylapore with specific, binding instructions: these properties
          were to serve the poor, orphans, widows, and distressed families. The
          proceeds from these lands were to be used exclusively for charitable
          purposes, particularly for the education and welfare of those who
          could not afford it themselves.
        </motion.p>

        <motion.p className="text-gray-900 leading-relaxed">
          His will was so carefully constructed that it was probated by the
          Supreme Court of Judicature at Madras in 1827 with a codicil
          specifying that the properties could never be sold—they were to remain
          in perpetual service to the needy.
        </motion.p>

        <motion.p className="text-gray-900 leading-relaxed">
          Today, John Demonte and his son Christopher rest together in the
          chapel he built in Kovalam, a father and son united in eternal peace,
          their story a testament to faith, love, and the transformative power
          of service.
        </motion.p>
        <motion.p className="text-lg md:text-xl font-semibold leading-relaxed">
          Continuing a Noble Mission
        </motion.p>
        <motion.p className="text-gray-900 leading-relaxed">
          This is the legacy we inherit and honor at JDAX Academy of Excellence.
        </motion.p>

        <motion.p className="text-gray-900 leading-relaxed">
          When the Archdiocese of Madras-Mylapore established JDAX in the 21st
          century, it did so as a direct fulfillment of John Demonte's vision.
          Just as he dedicated his fortune to educating and empowering those who
          lacked the means to help themselves, JDAX exists to democratize access
          to civil services preparation and competitive examination coaching.
        </motion.p>

        <motion.p className="text-gray-900 leading-relaxed">
          We serve students from modest backgrounds who dream of serving their
          nation but cannot afford the exorbitant fees charged by commercial
          coaching institutes. Like John Demonte, who turned personal tragedy
          into public service, we believe that every obstacle can become an
          opportunity to serve a higher purpose.
        </motion.p>
        <motion.p className="text-lg md:text-xl font-semibold leading-relaxed">
          Why "JDAX"?
        </motion.p>
        <motion.p className="text-gray-900 leading-relaxed">
          <span className="block font-semibold">J = John</span>
          <span className="block">
            D = Demonte – Our patron and inspiration
          </span>
          <span className="block">A = Academy</span>
          <span className="block">X = Excellence</span>

          <span className="block mt-3">
            The 'X' in our name represents not just excellence in academics, but
            excellence in character, service, and moral purpose. It symbolizes
            the "extraordinary" transformation we seek to catalyze in every
            student—from aspirant to public servant, from individual ambition to
            collective welfare, from personal success to societal
            transformation.
          </span>
        </motion.p>
        <motion.p className="text-lg md:text-xl font-semibold leading-relaxed">
          Our Sacred Commitment
        </motion.p>
        <motion.p className="text-gray-900 leading-relaxed">
          Just as John Demonte looked beyond his own pain to see the needs of
          others, JDAX looks beyond the narrow goal of merely clearing
          examinations. We are committed to:
          <ul className="list-disc list-inside">
            <li>
              <b style={{ textAlign: "left" }}>
                Democratizing Civil Services Education
              </b>
              : Making quality coaching accessible to students regardless of
              their economic background
            </li>
            <li>
              <b style={{ textAlign: "left" }}>Upholding True Meritocracy</b>:
              Ensuring that talent, not financial capacity, determines who gets
              the opportunity to serve
            </li>
            <li>
              <b style={{ textAlign: "left" }}>Building Character</b>:
              Developing not just successful candidates, but ethical leaders who
              embody the spirit of service
            </li>
            <li>
              <b style={{ textAlign: "left" }}>"RISE TO SERVE"</b>: Our
              institutional philosophy mirrors Demonte's life—we rise not for
              ourselves alone, but to serve others
            </li>
          </ul>
        </motion.p>
        <motion.p className="text-lg md:text-xl font-semibold leading-relaxed">
          A Location Steeped in History
        </motion.p>
        <motion.p className="text-gray-900 leading-relaxed">
          Fittingly, JDAX operates from Santhome, in the heart of the very
          Mylapore that John Demonte loved and served. We are located near the
          iconic Santhome Cathedral Basilica, within walking distance of
          properties that were once part of Demonte's estate. Every day, our
          students walk the same streets where this extraordinary philanthropist
          once walked, reminded that great service often emerges from great
          sacrifice.
        </motion.p>
        <motion.p className="text-lg md:text-xl font-semibold leading-relaxed">
          An Invitation to Join Our Legacy
        </motion.p>
        <motion.p className="text-gray-900 leading-relaxed">
          When you enroll at JDAX, you become part of a story that began over
          two centuries ago—a story of turning tragedy into triumph, of
          transforming wealth into welfare, of choosing service over
          self-interest. You join a lineage of those who believe that true
          nobility lies not in what we accumulate, but in what we give away; not
          in the power we wield, but in how we use that power to lift others.
        </motion.p>

        <motion.p className="text-gray-900 leading-relaxed">
          John Demonte could have passed his fortune to build a family dynasty.
          Instead, he chose to build countless futures. He could have mourned
          his losses in isolation. Instead, he transformed his grief into grace
          that continues to flow through JDAX today.
        </motion.p>

        <motion.p className="text-gray-900 leading-relaxed">
          This is the spirit we inherit. This is the mission we carry forward.
          This is why we are JDAX—the Academy that bears the name of a man who
          proved that the greatest legacy we can leave is not measured in acres
          or assets, but in the lives we touch and the service we render.
        </motion.p>

        <motion.div className="text-center text-xl font-semibold mt-10 text-[#431aa0] italic">
          "The measure of a life is not its duration, but its donation." – John
          Demonte's example reminds us that true greatness lies in service to
          those who can never repay us, and that the noblest use of prosperity
          is to create opportunity for those who have none.
        </motion.div>

        <motion.p className="mt-12 text-center font-semibold text-[#431aa0] text-2xl">
          Come, be part of this legacy. Rise to serve.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default AboutJDAX;
