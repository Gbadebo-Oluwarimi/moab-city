import { CreditCard, Building2, Shield } from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <div className="text-sm text-blue-600 font-medium mb-3">
              FUTURE PAYMENT
            </div>
            <h2 className="text-4xl font-normal leading-tight">
              Experience that grows with your scale.
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-gray-600 md:text-lg">
              Design a financial operating system that works for your business
              and streamlined cash flow management
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Free transfers */}
          <div className="space-y-4">
            <div className="w-12 h-12 flex items-center justify-center">
              <CreditCard className="w-8 h-8 text-blue-600" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-medium">Free transfers</h3>
            <p className="text-gray-600">
              Create a financial experience today and automate repeat purchases
              by scheduling recurring payments
            </p>
          </div>

          {/* Multiple account */}
          <div className="space-y-4">
            <div className="w-12 h-12 flex items-center justify-center">
              <Building2 className="w-8 h-8 text-blue-600" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-medium">Multiple account</h3>
            <p className="text-gray-600">
              Run your operations with cash from your account and generate yield
              on funds present in your account
            </p>
          </div>

          {/* Unmatched security */}
          <div className="space-y-4">
            <div className="w-12 h-12 flex items-center justify-center">
              <Shield className="w-8 h-8 text-blue-600" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-medium">Unmatched security</h3>
            <p className="text-gray-600">
              Security manage your finances with encryption-level APIs,
              card-locking, and account-level controls
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
