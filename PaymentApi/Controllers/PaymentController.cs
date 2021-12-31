using Asp.net_Mongodb.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Asp.net_Mongodb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public PaymentController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            MongoClient dbClient = new MongoClient(_configuration.GetConnectionString("PaymentCon"));

            var dbList = dbClient.GetDatabase("PTTKHTTTHD").GetCollection<order>("order").AsQueryable();

            return new JsonResult(dbList);
        }
        [HttpPost("add")]
        public JsonResult Post(order order)
        {
            MongoClient dbClient = new MongoClient(_configuration.GetConnectionString("PaymentCon"));

            //int LastorderId = dbClient.GetDatabase("PTTKHTTTHD").GetCollection<Payment>("order").AsQueryable().Count();
            //pay.orderId = LastorderId + 1;

            dbClient.GetDatabase("PTTKHTTTHD").GetCollection<order>("order").InsertOne(order);

            return new JsonResult("Successfully Added!");
        }
        [HttpPut("update")]
        public JsonResult Put(order order)
        {
            MongoClient dbClient = new MongoClient(_configuration.GetConnectionString("PaymentCon"));

            var filter = Builders<order>.Filter.Eq("OrderId", order.id);

            var update = Builders<order>.Update.Set("fullName", order.fullname);

            dbClient.GetDatabase("PTTKHTTTHD").GetCollection<order>("order").UpdateOne(filter, update);

            return new JsonResult("Updated Added!");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            MongoClient dbClient = new MongoClient(_configuration.GetConnectionString("PaymentCon"));

            var filter = Builders<order>.Filter.Eq("OrderId", id);

            dbClient.GetDatabase("PTTKHTTTHD").GetCollection<order>("order").DeleteOne(filter);

            return new JsonResult("Successfully Deleted!");
        }
    }
}
