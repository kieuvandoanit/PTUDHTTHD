using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.net_Mongodb.Models
{   
    public class order
    {
        public ObjectId id { get; set; }
        public string orderDate { get; set; }
        public string payments { get; set; }
        public PaymentOnline paymentOnline { get; set; }
        public string fullname { get; set; }
        public string phoneNumber { get; set; }
        public string email { get; set; }
        public Address address { get; set; }
        public string discount { get; set; }
        public List<Product> product { get; set; }
        public float totalPrice { get; set; }
        public int customerId { get; set; }
        public string status { get; set; }
        public int shipperId { get; set; }
        public string shipperName { get; set; }
        public int storeId { get; set; }
        public string _class { get; set; }
    }
    public class PaymentOnline
    {
        public string bankName { get; set; }
        public string nameOnCard { get; set; }
        public string creditCardNumber { get; set; }
        public string expYear { get; set; }
        public string cvcNumber { get; set; }
    }
    public class Address
    {
        public string province { get; set; }
        public string district { get; set; }
        public string ward { get; set; }
        public string street { get; set; }
        public string home_number { get; set; }
    }
    public class Product
    {
        public string productName { get; set; }
        public int productPrice { get; set; }
        public string unit { get; set; }
        public int quantity { get; set; }
        public string productImage { get; set; }
    }
}
