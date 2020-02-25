﻿using DBModels;
using DBStore;
using DBStore.Interfaces;
using Microsoft.EntityFrameworkCore;
using ReductionUrl.Helpers;
using ReductionUrl.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Threading.Tasks;

namespace ReductionUrl.Services.Implementation
{
    public class StoreService : IStoreService
    {
        IStoreRepository _repository;

        public StoreService(IStoreRepository repository)
        {
            _repository = repository;
        }

        public async Task Counter(int id)
        {
            var url = await _repository.GetUrl(id);
            url.Count++;
            await _repository.UpdateUrl(url);
        }

        public async Task<StoreUrl> FindUrl(string shortUrl)
        {
            return await _repository.FindUrl(shortUrl);
        }

        public async Task AddUrl(string url)
        {
            var hashUrl = new HashUrl();
            var result = new StoreUrl()
            {
                LongUrl = url,
                ShortUrl = hashUrl.Create(url),
                Created = DateTime.Now,
                Count = 0
            };
            await _repository.AddUrl(result);
        }

        public async Task DeleteUrl(int id)
        {
            await _repository.DeleteUrl(id);
        }

        public async Task<StoreUrl> GetUrl(int id)
        {
            return await _repository.GetUrl(id);
        }

        public async Task<IEnumerable<StoreUrl>> GetUrls()
        {
            return await _repository.GetUrls();
        }

        public async Task UpdateUrl(int id, string longUrl)
        {
            if (id > 0)
            {
                var url = await _repository.GetUrl(id);
                url.LongUrl = longUrl;
                await _repository.UpdateUrl(url);
            }
        }


    }
}
