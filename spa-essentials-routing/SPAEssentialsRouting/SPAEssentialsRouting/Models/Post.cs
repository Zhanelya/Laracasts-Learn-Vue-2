using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace SPAEssentialsRouting.Models
{
    public class Post
    {
        public User User;
        public string Body;
        public string Date;
    }
}
