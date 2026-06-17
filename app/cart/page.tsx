'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart-context';

function CartMark() {
  return (
    <svg className="h-14 w-14 text-primary/35" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.2 7.5h13.1l-1.2 8.2H7.4L6.2 7.5Z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6.2 7.5 5.7 4H3.8" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8.7 20h.1M17 20h.1" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function Cart() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <CartMark />
        <h1 className="mt-7 font-headline-lg text-[34px] text-on-surface">Your cart is empty</h1>
        <p className="mt-3 font-body-md text-[15px] text-on-surface-variant">
          Explore the Scrubskwad product edit.
        </p>
        <Link
          href="/shop"
          className="mt-9 bg-primary px-8 py-4 font-label-md text-[11px] uppercase tracking-[0.18em] text-on-primary transition hover:bg-primary/90"
        >
          Visit the Shop
        </Link>
      </div>
    );
  }

  const shipping = totalPrice >= 50 ? 0 : 5.99;

  return (
    <>
      <section className="mx-auto max-w-[1200px] px-6 pb-10 pt-32 md:px-20 md:pt-36">
        <h1 className="font-display-lg text-[36px] leading-tight text-on-surface md:text-[46px]">Your cart</h1>
        <p className="mt-2 font-body-md text-[14px] text-secondary">
          {totalItems} item{totalItems !== 1 ? 's' : ''}
        </p>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pb-20 md:px-20">
        <div className="grid gap-12 md:grid-cols-[1fr_360px]">
          <div className="border-t border-tertiary-fixed">
            {items.map(item => (
              <div key={item.id} className="grid gap-5 border-b border-tertiary-fixed py-7 sm:grid-cols-[86px_1fr_auto]">
                <img
                  src="https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=300&q=85"
                  alt={item.name}
                  className="h-[86px] w-[86px] object-cover"
                />
                <div>
                  <p className="font-label-md text-[10px] uppercase tracking-[0.18em] text-secondary">{item.category}</p>
                  <h2 className="mt-1 font-headline-md text-[22px] text-on-surface">{item.name}</h2>
                  <div className="mt-4 flex flex-wrap items-center gap-5">
                    <div className="flex border border-tertiary-fixed">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-2 text-secondary">-</button>
                      <span className="border-x border-tertiary-fixed px-4 py-2 font-body-md text-[14px]">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-2 text-secondary">+</button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="font-label-md text-[11px] uppercase tracking-[0.16em] text-secondary transition hover:text-primary"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <p className="font-label-md text-[13px] text-primary">£{(item.price * item.quantity).toFixed(2)}</p>
                  <p className="mt-1 font-body-md text-[13px] text-secondary">£{item.price.toFixed(2)} each</p>
                </div>
              </div>
            ))}
            <button
              onClick={clearCart}
              className="mt-6 font-label-md text-[11px] uppercase tracking-[0.16em] text-secondary transition hover:text-primary"
            >
              Clear cart
            </button>
          </div>

          <aside className="h-max bg-surface-container-low p-7">
            <h2 className="font-headline-md text-[28px] text-on-surface">Order summary</h2>
            <div className="mt-7 space-y-4 font-body-md text-[14px]">
              <div className="flex justify-between">
                <span className="text-secondary">Subtotal</span>
                <span>£{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-secondary">Shipping</span>
                <span>{shipping === 0 ? 'Free' : `£${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between border-t border-tertiary-fixed pt-4 font-headline-md text-[22px]">
                <span>Total</span>
                <span className="text-primary">£{(totalPrice + shipping).toFixed(2)}</span>
              </div>
            </div>
            <button className="mt-8 w-full bg-primary py-4 font-label-md text-[11px] uppercase tracking-[0.18em] text-on-primary transition hover:bg-primary/90">
              Checkout
            </button>
            <Link href="/shop" className="mt-5 block text-center font-label-md text-[11px] uppercase tracking-[0.16em] text-secondary hover:text-primary">
              Continue shopping
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
