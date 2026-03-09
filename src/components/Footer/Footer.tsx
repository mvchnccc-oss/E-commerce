import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-400 pt-12 pb-6 border-t border-gray-800">
      <div className="container max-w-7xl mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#95BF47] text-black w-10 h-10 flex items-center justify-center font-bold rounded">
                S
              </div>
              <h2 className="text-xl font-bold text-white">ShopMart</h2>
            </div>

            <p className="text-sm leading-6">
              Your one-stop destination for technology, fashion, and lifestyle
              products. Quality guaranteed with fast shipping.
            </p>

            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>October City, Egypt</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>(+20) 01093333333</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>support@shopmart.com</span>
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-white font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-[#95BF47]">Products</Link></li>
              <li><Link href="/categories" className="hover:text-[#95BF47]">Categories</Link></li>
              <li><Link href="/brands" className="hover:text-[#95BF47]">Brands</Link></li>
            </ul>
          </div>

          {/* Customer */}
          <div>
            <h3 className="text-white font-semibold mb-4">Customer</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/cart" className="hover:text-[#95BF47]">Cart</Link></li>
              <li><Link href="/favs" className="hover:text-[#95BF47]">Wishlist</Link></li>
              <li><Link href="/myOrders" className="hover:text-[#95BF47]">My Orders</Link></li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-white font-semibold mb-4">Account</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/login" className="hover:text-[#95BF47]">Login</Link></li>
              <li><Link href="/register" className="hover:text-[#95BF47]">Register</Link></li>
              <li><Link href="/profile" className="hover:text-[#95BF47]">Profile</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} ShopMart. All rights reserved.
        </div>

      </div>
    </footer>
  );
}