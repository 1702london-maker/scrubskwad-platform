'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart-context';

export default function Cart() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <span className="material-symbols-outlined text-primary/30 text-8xl mb-8">shopping_cart</span>
        <h1 className="font-headline-lg text-headline-lg mb-4" style={{ fontFamily: 'EB Garamond, serif' }}>Your Cart is Empty</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">Explore our range of professional cleaning products.</p>
        <Link href="/shop" className="bg-primary text-on-primary px-10 py-5 font-label-md text-label-md tracking-wider hover:bg-primary/90 transition-all">
          VISIT THE SHOP
        </Link>
      </div>
    );
  }

  return (
    <>
      <section className="pt-40 pb-12 px-6 md:px-20 max-w-[1200px] mx-auto">
        <h1 className="font-display-lg text-display-lg md:text-5xl text-on-surface mb-2" style={{ fontFamily: 'EB Garamond, serif' }}>Your Cart</h1>
        <p className="font-body-md text-body-md text-secondary">{totalItems} item{totalItems !== 1 ? 's' : ''}</p>
      </section>

      <section className="px-6 md:px-20 max-w-[1200px] mx-auto pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Items */}
          <div className="md:col-span-2 space-y-0 border-t border-[#c8c4be]/30">
            {items.map(item => (
              <div key={item.id} className="flex gap-6 py-8 border-b border-[#c8c4be]/30">
                <div className="w-24 h-24 bg-surface-container-low shrink-0 overflow-hidden">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeNwdbE5I3-vLppWRdRbANYZjh8e3WN5_OuZ-nZlRo9Wa6vAAt_VfL21jBoIkVZsX3ahLafxnViH0H-MUg15GWxUEf_EF4mUqVdDu92G1rbXgInArbxtbO2BqNobfBMUs6BI37CID6It-WIP_--VpazvF1U7fIgrcCvD9PXApt_aRDb6VJJhhUTkC5sT-kVExkt_hOs_4y3xP0fKssz27U4ujh_X7rosU_Y_v0xG4QQuNCx6VPVjDUdiRtolaepuzdM4DneVNZHE0"
                    alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-1">{item.category}</p>
                  <h3 className="font-headline-md text-[18px] text-on-surface mb-3" style={{ fontFamily: 'EB Garamond, serif' }}>{item.name}</h3>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center border border-[#c8c4be]/50">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-2 hover:bg-surface-container transition-colors font-body-md text-secondary">−</button>
                      <span className="px-4 py-2 font-body-md border-x border-[#c8c4be]/50">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-2 hover:bg-surface-container transition-colors font-body-md text-secondary">+</button>
                    </div>
                    <button onClick={() => removeItem(item.id)} className="font-label-md text-label-md text-secondary hover:text-primary transition-colors flex items-center gap-1">
                      <span className="material-symbols-outlined text-[18px]">delete</span> Remove
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-body-lg text-body-lg text-primary">£{(item.price * item.quantity).toFixed(2)}</p>
                  <p className="font-label-md text-label-md text-secondary">£{item.price.toFixed(2)} each</p>
                </div>
              </div>
            ))}
            <div className="pt-6">
              <button onClick={clearCart} className="font-label-md text-label-md text-secondary hover:text-primary transition-colors flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">remove_shopping_cart</span> Clear cart
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-surface-container-low border border-[#c8c4be]/30 p-8 sticky top-32">
              <h3 className="font-headline-md text-headline-md mb-6" style={{ fontFamily: 'EB Garamond, serif' }}>Order Summary</h3>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between font-body-md text-body-md">
                  <span className="text-secondary">Subtotal</span>
                  <span>£{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-body-md text-body-md">
                  <span className="text-secondary">Shipping</span>
                  <span>{totalPrice >= 50 ? 'Free' : '£5.99'}</span>
                </div>
                {totalPrice < 50 && (
                  <p className="font-label-md text-label-md text-secondary bg-primary/5 border border-primary/10 px-4 py-3">
                    Add £{(50 - totalPrice).toFixed(2)} more for free delivery
                  </p>
                )}
                <div className="border-t border-[#c8c4be]/30 pt-3 flex justify-between font-headline-md text-[20px]">
                  <span>Total</span>
                  <span className="text-primary">£{(totalPrice < 50 ? totalPrice + 5.99 : totalPrice).toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full bg-primary text-on-primary py-5 font-label-md text-label-md tracking-widest hover:bg-primary/90 transition-all mb-4">
                CHECKOUT
              </button>
              <Link href="/shop" className="block text-center font-label-md text-label-md text-secondary hover:text-primary transition-colors">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
