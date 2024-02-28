SELECT TOP(100)
	[Task1].[dbo].[customers].[name] AS [name],
	COUNT(orders.customer_id) AS [num_orders],
	SUM(order_line_items.unit_price * order_line_items.quantity) AS [total_order_value],
	AVG(order_line_items.unit_price * order_line_items.quantity) AS [avg_order_value]
  FROM customers AS c
  INNER JOIN orders AS o 
	ON c.customer_id = o.customer_id
  LEFT JOIN order_line_items AS oli
	ON oli.order_id = o.order_id
  GROUP BY c.name, c.customer_id
  ORDER BY avg_order_value DESC; 
