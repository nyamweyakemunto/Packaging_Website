import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-background to-muted py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Premium Packaging Solutions
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Custom packaging solutions tailored to your brand needs. High-quality materials and sustainable options.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">Get Started</Button>
                <Button size="lg" variant="outline">
                  View Products
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Products Section */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
              <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-4xl">
                Our Products
              </h2>
              <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Discover our range of premium packaging solutions.
              </p>
            </div>
            
            <div className="mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:max-w-5xl lg:grid-cols-3 mt-10">
              {/* Product 1 */}
              <div className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-h-3 aspect-w-4 h-60 bg-muted">
                  <img 
                    src="https://images.pexels.com/photos/5498664/pexels-photo-5498664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Custom boxes" 
                    className="object-cover w-full h-full transition-all hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold tracking-tight text-xl">Custom Boxes</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Premium custom boxes for your products. Fully customizable with your branding.
                  </p>
                  <Button className="mt-4" variant="outline" size="sm">Learn More</Button>
                </div>
              </div>
              
              {/* Product 2 */}
              <div className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-h-3 aspect-w-4 h-60 bg-muted">
                  <img 
                    src="https://images.pexels.com/photos/5578027/pexels-photo-5578027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Eco-friendly bags" 
                    className="object-cover w-full h-full transition-all hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold tracking-tight text-xl">Eco-Friendly Bags</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Sustainable packaging bags made from recycled and biodegradable materials.
                  </p>
                  <Button className="mt-4" variant="outline" size="sm">Learn More</Button>
                </div>
              </div>
              
              {/* Product 3 */}
              <div className="group relative overflow-hidden rounded-lg border">
                <div className="aspect-h-3 aspect-w-4 h-60 bg-muted">
                  <img 
                    src="https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Custom labels" 
                    className="object-cover w-full h-full transition-all hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold tracking-tight text-xl">Custom Labels</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    High-quality custom labels and stickers for product branding and packaging.
                  </p>
                  <Button className="mt-4" variant="outline" size="sm">Learn More</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-muted py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to enhance your packaging?
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Get in touch with our expert team for a personalized consultation.
                </p>
              </div>
              <Button size="lg" className="mt-4">
                Contact Us Today
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}