import Stripe from 'stripe';
import { useContext } from 'react';
import { Message_data } from '../../../context/Context';
const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  
  const placeOrder = async({user, userToken, cartItems})=>{
    const query = 'http://127.0.0.1:8000/user/placeorder/';

  // await Promise.all(cartItems.map(async (item) => {
  const _data = {
    "product" : cartItems[0].id,
    "status": "Order Placed",
    "delivery_address": user.address,
  };

  try {
    const response = await axios.post(query, _data, {
      headers:{
        Authorization: `Bearer ${userToken}` 
      }
    });
    console.log(response);
  } catch (error) {
    alert(error.message);
  }
}

// ));
  if (req.method === 'POST') {
    try {
      const { user, userToken, cartItems } = req.body;
      console.log(cartItems)
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [
          { shipping_rate: 'shr_1MrH2nSJHxw2XplCwBwa4s2K' },
        ],
        line_items: cartItems.map((item) => {
          const img = item.image;
          console.log(img)
          return {
            price_data: { 
              currency: 'inr',
              product_data: { 
                name: item.name,
                images: [img],
              },
              unit_amount: item.selling_price * 100,
            },
            adjustable_quantity: {
              enabled:true,
              minimum: 1,
            },
            quantity: item.quantity
          }
        }),
        success_url: `${req.headers.origin}/sucess`,
        cancel_url: `${req.headers.origin}/canceled`,
      }

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      // await placeOrder(user, userToken, cartItems);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}