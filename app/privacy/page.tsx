import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen mx-9 p-2 flex flex-col items-center  justify-center gap-3 ">
      <h1 className="text-orange-500 text-3xl underline my-6 lg:text-4xl">
        Terms of Service
      </h1>
      <p className="prose  md:prose-lg lg:prose-2xl  dark:text-gray-200 my-2">
        Welcome to Ditekta . By accessing or using our services, you agree to
        comply with and be bound by the following terms and conditions. Please
        read them carefully.
      </p>

      <h2 className="my-2 text-blue-700 dark:text-blue-400 font-bold prose-h2:text-start">
        1. Acceptance of Terms
      </h2>
      <p className="prose  md:prose-lg lg:prose-2xl   dark:text-gray-200 my-2">
        By using our website and services, you accept these terms in full. If
        you disagree with any part of these terms, do not use our services.
      </p>
      <h2 className="my-2 text-blue-700 dark:text-blue-400 font-bold">
        2. Use of Services
      </h2>
      <p className="prose  md:prose-lg lg:prose-2xl  dark:text-gray-200 my-2">
        You agree to use our services only for lawful purposes and in a manner
        that does not infringe the rights of, restrict, or inhibit anyone else's
        use of our services.
      </p>
      <h2 className="my-2 text-blue-700 dark:text-blue-400 font-bold">
        3. Intellectual Property
      </h2>
      <p className="prose  md:prose-lg lg:prose-2xl  dark:text-gray-200 my-2">
        All content, trademarks, and data on this website, including but not
        limited to software, databases, text, graphics, icons, hyperlinks,
        private information, designs, and agreements, are the property of Diluc
        Steiner and are protected by law. Unauthorized use is prohibited.
      </p>
      <h2 className="my-2 text-blue-700 dark:text-blue-400 font-bold">
        4.Privacy Policy
      </h2>
      <p className="prose  md:prose-lg lg:prose-2xl  dark:text-gray-200 my-2">
        Our Privacy Policy, which is incorporated into these terms by reference,
        explains how we collect, use, and protect your information. By using our
        services, you agree to the collection and use of information in
        accordance with this policy.
      </p>
      <h2 className="my-2 text-blue-700 dark:text-blue-400 font-bold">
        5. Limitation of Liability.
      </h2>
      <p className="prose  md:prose-lg lg:prose-2xl  dark:text-gray-200 my-2">
        Ditekta will not be liable for any indirect, incidental, special,
        consequential, or punitive damages, or any loss of profits or revenues,
        whether incurred directly or indirectly, or any loss of data, use,
        goodwill, or other intangible losses, resulting from your use of our
        services.
      </p>
      <h2 className="my-2 text-blue-700 dark:text-blue-400 font-bold">
        6. Changes to Terms
      </h2>
      <p className="prose  md:prose-lg lg:prose-2xl  dark:text-gray-200 my-2">
        We reserve the right to modify these terms at any time. Your continued
        use of our services following any changes constitutes your acceptance of
        the new terms.
      </p>
      <h2 className="my-2 text-blue-700 dark:text-blue-400 font-bold">
        7. Governing Law
      </h2>
      <p className="prose  md:prose-lg lg:prose-2xl  dark:text-gray-200 my-2">
        These terms are governed by and construed in accordance with the laws of
        the jurisdiction in which Ditekta operates.
      </p>
      <Section2 />
    </div>
  );
};

export default PrivacyPolicyPage;

function Section2() {
  return (
    <>
      <h1 className="text-orange-500 text-3xl underline my-6 lg:text-4xl">
        Privacy Policy
      </h1>
      <p className="prose  md:prose-lg lg:prose-2xl  dark:text-gray-200 my-2">
        Ditekta is committed to protecting your privacy. This Privacy Policy
        outlines how we handle your personal information to protect your
        privacy.
      </p>

      <h2 className="my-2 text-blue-700 dark:text-blue-400 font-bold">
        1. Information Collection
      </h2>
      <p className="prose  md:prose-lg lg:prose-2xl  dark:text-gray-200 my-2">
        We collect information to provide better services to our users. The
        information we collect includes:-
      </p>
      <div className="ml-2">
        <ul className="prose  md:prose-lg lg:prose-2xl  dark:text-gray-200 my-2">
          <li className="ml-2 list-disc">
            Personal information you provide when you register for our services,
            including your name, email address, and contact details.
          </li>
          <li className="ml-2 list-disc">
            Information collected through your use of our services, such as
            usage data and preferences.
          </li>
        </ul>
      </div>
      <h2 className="my-2 text-blue-700 dark:text-blue-400 font-bold">
        2. Use of Information
      </h2>
      <p className="prose  md:prose-lg lg:prose-2xl  dark:text-gray-200 my-2">
        We use the information we collect for the following purposes:-
      </p>
      <div className="ml-2">
        <ul className="prose  md:prose-lg lg:prose-2xl  dark:text-gray-200 my-2">
          <li className="ml-2 list-disc">
            To provide, maintain, and improve our services
          </li>
          <li className="ml-2 list-disc">
            To develop new services and features
          </li>
          <li className="ml-2 list-disc">
            To understand and analyze how you use our services
          </li>
          <li className="ml-2 list-disc">
            To communicate with you, either directly or through one of our
            partners, including for customer service, to provide you with
            updates and other information relating to the service.
          </li>
        </ul>
      </div>
      <h2 className="my-2 text-blue-700 dark:text-blue-400 font-bold">
        3. Data Protection
      </h2>
      <p className="prose  md:prose-lg lg:prose-2xl  dark:text-gray-200 my-2">
        We implement a variety of security measures to maintain the safety of
        your personal information. We use encryption to protect sensitive
        information transmitted online, and we also protect your information
        offline.
      </p>
      <h2 className="my-2 text-blue-700 dark:text-blue-400 font-bold">
        4. Sharing of Information
      </h2>
      <p className="prose  md:prose-lg lg:prose-2xl  dark:text-gray-200 my-2">
        We do not share your personal information with third parties except in
        the following circumstances:-
      </p>
      <div className="ml-2">
        <ul className="prose  md:prose-lg lg:prose-2xl  dark:text-gray-200 my-2">
          <li className="ml-2 list-disc">With your consent.</li>
          <li className="ml-2 list-disc">
            For external processing by trusted partners who comply with our
            privacy policy
          </li>
          <li className="ml-2 list-disc">
            For legal reasons if we believe that disclosure of the information
            is necessary to comply with any applicable law, regulation, legal
            process, or enforceable governmental request.
          </li>
        </ul>
      </div>
      <h2 className="my-2 text-blue-700 dark:text-blue-400 font-bold">
        5. Diversity and Inclusion.
      </h2>
      <p className="prose  md:prose-lg lg:prose-2xl  dark:text-gray-200 my-2">
        At Ditekta , we value diversity and inclusion. We are committed to
        ensuring that our AI models are trained on diverse datasets to provide
        accurate and equitable healthcare solutions across different
        populations. We strive to create an inclusive environment where all
        users feel valued and respected
      </p>
      <h2 className="my-2 text-blue-700 dark:text-blue-400 font-bold">
        6. Your Rights
      </h2>
      <p className="prose  md:prose-lg lg:prose-2xl  dark:text-gray-200 my-2">
        You have the right to access, correct, or delete your personal
        information. You can also object to the processing of your personal
        information in certain circumstances. To exercise these rights, please
        contact us.
      </p>
      <h2 className="my-2 text-blue-700 dark:text-blue-400 font-bold">
        7. Changes to Privacy Policy
      </h2>
      <p className="prose  md:prose-lg lg:prose-2xl  dark:text-gray-200 my-2">
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on our website. You are
        advised to review this Privacy Policy periodically for any changes.
      </p>
      <h2 className="my-5 text-blue-700 dark:text-blue-400 font-bold uppercase">
        Contact us
      </h2>
      <p className="prose  md:prose-lg lg:prose-2xl  dark:text-gray-200 my-2">
        If you have any questions about these Terms or our Privacy Policy,
        please contact us at:-
      </p>
      <div className="mt-3 flex flex-col text-lg justify-start items-start">
        <div>
          <p className="  gap-x-2 text-gray-600   dark:text-neutral-400 ">
            Ditekta ,
          </p>
        </div>
        <div>
          <p className="  gap-x-2 text-gray-600   dark:text-neutral-400 ">
            Pugu road, Ilala Dar es Saalam,
          </p>
        </div>
        <div>
          <p className="  gap-x-2 text-gray-600  dark:text-neutral-400 ">
            United Republic of Tanzania.
          </p>
        </div>
        <p>
          <Link
            className="hover:scale-105 gap-x-2 text-gray-600 hover:text-blue-500 dark:text-neutral-400 dark:hover:text-blue-500 flex items-center justify-start"
            href="mailto:info@dilucsteiner.com"
          >
            <Mail className="size-4" />
            <span className="underline"> info@dilucsteiner.com</span>
          </Link>
        </p>
      </div>
    </>
  );
}
