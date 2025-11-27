/**
 * Purchases Feed API Endpoint
 *
 * This is a mock endpoint that returns an empty array by default.
 *
 * PRODUCTION SETUP:
 *
 * 1. Webhook Integration (Kiwify):
 *    - Configure Kiwify webhook to POST to your serverless function
 *    - Webhook URL: https://your-domain.com/api/webhooks/kiwify
 *    - Events to track: order.approved, order.completed
 *
 * 2. Process Webhook Data:
 *    - Receive webhook POST requests
 *    - Validate webhook signature (security)
 *    - Extract: customer name, product, city/state, timestamp
 *    - Optionally store in Supabase for persistence
 *
 * 3. Store in Supabase (Optional):
 *    CREATE TABLE activity_events (
 *      id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 *      event_type text NOT NULL,
 *      customer_name text,
 *      product_name text,
 *      city text,
 *      created_at timestamptz DEFAULT now()
 *    );
 *
 * 4. This Endpoint:
 *    - Query recent events (last 10-15 minutes)
 *    - Return array of events in the format below
 *    - Cache response for 10-20 seconds
 *
 * Expected Response Format:
 * [
 *   {
 *     "type": "purchase",
 *     "name": "João Santos",
 *     "item": "Kit Completo",
 *     "city": "São Paulo - SP",
 *     "ts": "2025-11-05T16:35:00Z"
 *   },
 *   {
 *     "type": "cart_activity",
 *     "count": 5,
 *     "window": "10 min"
 *   },
 *   {
 *     "type": "viewers",
 *     "count": 18
 *   }
 * ]
 */

// This is a mock implementation that returns empty array
// Replace with actual data fetching logic

export interface PurchaseEvent {
  type: 'purchase';
  name: string;
  item: string;
  city?: string;
  ts: string;
}

export interface CartActivityEvent {
  type: 'cart_activity';
  count: number;
  window: string;
}

export interface ViewersEvent {
  type: 'viewers';
  count: number;
}

export type ActivityEvent = PurchaseEvent | CartActivityEvent | ViewersEvent;

/**
 * Fetch recent activity events
 *
 * IMPLEMENTATION STEPS:
 * 1. Connect to Supabase client
 * 2. Query activity_events table for recent events (last 15 min)
 * 3. Transform data to match ActivityEvent types
 * 4. Return array
 *
 * Example Supabase query:
 *
 * const { data, error } = await supabase
 *   .from('activity_events')
 *   .select('*')
 *   .gte('created_at', new Date(Date.now() - 15 * 60 * 1000).toISOString())
 *   .order('created_at', { ascending: false })
 *   .limit(10);
 */
export async function fetchPurchasesFeed(): Promise<ActivityEvent[]> {
  // TODO: Implement real data fetching
  // For now, return empty array (no fake data in production)
  return [];

  // Example implementation with Supabase:
  /*
  import { createClient } from '@supabase/supabase-js';

  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
  );

  const fifteenMinutesAgo = new Date(Date.now() - 15 * 60 * 1000).toISOString();

  const { data, error } = await supabase
    .from('activity_events')
    .select('*')
    .gte('created_at', fifteenMinutesAgo)
    .order('created_at', { ascending: false })
    .limit(10);

  if (error || !data) {
    return [];
  }

  return data.map(event => ({
    type: event.event_type,
    name: event.customer_name,
    item: event.product_name,
    city: event.city,
    ts: event.created_at
  }));
  */
}

/**
 * Process Kiwify Webhook
 *
 * This function should be called by your webhook handler
 *
 * @param webhookData - Data received from Kiwify webhook
 * @returns Promise<void>
 *
 * Example usage:
 *
 * export async function handleKiwifyWebhook(req: Request) {
 *   const data = await req.json();
 *
 *   // Validate webhook signature
 *   if (!validateKiwifySignature(req, data)) {
 *     return new Response('Unauthorized', { status: 401 });
 *   }
 *
 *   await processKiwifyWebhook(data);
 *   return new Response('OK', { status: 200 });
 * }
 */
export async function processKiwifyWebhook(webhookData: any): Promise<void> {
  // TODO: Implement webhook processing
  // 1. Extract relevant data
  // 2. Store in Supabase
  // 3. Handle errors gracefully

  /*
  import { createClient } from '@supabase/supabase-js';

  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  if (webhookData.event === 'order.approved' || webhookData.event === 'order.completed') {
    const { error } = await supabase
      .from('activity_events')
      .insert({
        event_type: 'purchase',
        customer_name: webhookData.customer.name,
        product_name: webhookData.product.name,
        city: `${webhookData.customer.city} - ${webhookData.customer.state}`,
        created_at: new Date().toISOString()
      });

    if (error) {
      console.error('Error storing webhook data:', error);
    }
  }
  */
}
