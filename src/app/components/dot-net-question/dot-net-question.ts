import { Component } from '@angular/core';

@Component({
  selector: 'app-dot-net-question',
  imports: [],
  templateUrl: './dot-net-question.html',
  styleUrl: './dot-net-question.css'
})
export class DotNetQuestion {
  codeBlocks = [
    {
      code: `public class Customer
            {
                public string Name { get; set; }
                public int Age { get; set; }
            }

            public class Product
            {
                public string Name { get; set; }
                public decimal Price { get; set; }
            }
            `
    },
    {
      code: `public class RequestData
            {
                public Customer customer { get; set; }
                public Product Product { get; set; }
            }
            `
    },
    {
      code: `[HttpPost]
            public IActionResult SubmitData([FromBody] RequestData data)
            {
                // can now access data.User and data.Product
                return Ok("Data received!");
            }
            `
    }
  ]
}
