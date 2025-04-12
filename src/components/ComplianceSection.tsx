import { Shield, FileCheck, Lock } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const ComplianceSection = () => {
  return (
    <section id="compliance" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="gradient-text mb-4">Compliance & Security</h2>
          <p className="text-lg text-muted-foreground">
            Our "Compliance by Design" philosophy ensures that all our solutions meet
            regulatory requirements and industry standards from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-tech-green" />
              <h3 className="text-xl font-semibold ml-3">AI Governance</h3>
            </div>
            <p className="text-muted-foreground">
              Our AI solutions are built to be transparent, explainable, and fair. We adhere to
              emerging standards for responsible AI development and deployment.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <FileCheck className="h-8 w-8 text-tech-green" />
              <h3 className="text-xl font-semibold ml-3">Robotics Safety</h3>
            </div>
            <p className="text-muted-foreground">
              All robotics systems comply with ISO/TS 15066 and relevant safety standards,
              ensuring safe human-robot collaboration in any environment.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <Lock className="h-8 w-8 text-tech-green" />
              <h3 className="text-xl font-semibold ml-3">Data Protection</h3>
            </div>
            <p className="text-muted-foreground">
              We implement robust data security measures and comply with GDPR, CCPA, HIPAA,
              and other relevant data protection regulations.
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center">Industry-Specific Frameworks</h3>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">Healthcare Compliance</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">Our healthcare solutions comply with:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>HIPAA for patient data protection</li>
                  <li>FDA regulations for medical devices</li>
                  <li>HITECH Act requirements</li>
                  <li>International standards like ISO 13485</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">Financial Services Regulation</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">Our financial solutions adhere to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>PCI DSS for payment processing</li>
                  <li>SOX for financial reporting</li>
                  <li>AML and KYC requirements</li>
                  <li>FINRA and SEC regulations</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">Manufacturing Standards</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">Our manufacturing solutions follow:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>ISO 9001 for quality management</li>
                  <li>ISO/TS 16949 for automotive</li>
                  <li>GMP for regulated products</li>
                  <li>Industry 4.0 security frameworks</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg">Energy Sector Requirements</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <p className="mb-4">Our energy solutions comply with:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>NERC CIP for power infrastructure</li>
                  <li>API standards for oil and gas</li>
                  <li>ISO 50001 for energy management</li>
                  <li>Environmental regulatory requirements</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
