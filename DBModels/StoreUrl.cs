using System;

namespace DBModels
{
    public class StoreUrl
    {
        public int ID { get; set; }
        public string LongUrl { get; set; }
        public string ShortUrl { get; set; }
        public DateTime Created { get; set; }
        public int Count { get; set; }
    }
}
