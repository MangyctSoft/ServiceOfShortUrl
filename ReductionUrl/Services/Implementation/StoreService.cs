using DBModels;
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
    /// <summary>
    /// Сервис по добавление, удалению, редактированию и изменению url-адресов в бд.
    /// При добавлении добавляется сокращенная форма url.
    /// При переходе подсчитывается количество переходов.
    /// </summary>
    public class StoreService : IStoreService
    {
        IStoreRepository _repository;

        public StoreService(IStoreRepository repository)
        {
            _repository = repository;
        }
        /// <summary>
        /// Увеличивать счетчик перехода.
        /// </summary>
        /// <param name="id">Идентификатор url в бд.</param>
        /// <returns></returns>
        public async Task Counter(int id)
        {
            var url = await _repository.GetUrl(id);
            url.Count++;
            await _repository.UpdateUrl(url);
        }
        /// <summary>
        /// Поиск по короткому url.
        /// </summary>
        /// <param name="shortUrl">Короткий url/.</param>
        /// <returns></returns>
        public async Task<StoreUrl> FindUrl(string shortUrl)
        {
            return await _repository.FindUrl(shortUrl);
        }
        /// <summary>
        /// Добавляем url и формируем его короткую версию.
        /// </summary>
        /// <param name="url">url-адресс.</param>
        /// <returns></returns>
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
        /// <summary>
        /// Удаляем url-адресс из бд.
        /// </summary>
        /// <param name="id">Идентификатор url в бд.</param>
        /// <returns></returns>
        public async Task DeleteUrl(int id)
        {
            await _repository.DeleteUrl(id);
        }
        /// <summary>
        /// Получаем url-адресс из бд.
        /// </summary>
        /// <param name="id">Идентификатор url в бд.</param>
        /// <returns></returns>
        public async Task<StoreUrl> GetUrl(int id)
        {
            return await _repository.GetUrl(id);
        }
        /// <summary>
        /// Получаем все url-адресса из бд.
        /// </summary>
        /// <returns></returns>
        public async Task<IEnumerable<StoreUrl>> GetUrls()
        {
            return await _repository.GetUrls();
        }
        /// <summary>
        /// Обновляем url-адресс в бд.
        /// </summary>
        /// <param name="id">Идентификатор url в бд.</param>
        /// <param name="longUrl">url-адресс.</param>
        /// <returns></returns>
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
