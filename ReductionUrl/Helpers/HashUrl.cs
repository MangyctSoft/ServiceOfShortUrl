using System.Text;

namespace ReductionUrl.Helpers
{
    public class HashUrl
    {
        /// <summary>
        /// Метод кодирования url-адреса и обрезание его до короткой строки
        /// </summary>
        /// <param name="url">Url-адрес</param>
        /// <returns></returns>
        public string Create(string url)
        {
            var crypt = new System.Security.Cryptography.SHA256Managed();
            var hash = new System.Text.StringBuilder();
            byte[] crypto = crypt.ComputeHash(Encoding.UTF8.GetBytes(url));
            foreach (byte theByte in crypto)
            {
                hash.Append(theByte.ToString("x2"));
            }
            var text = hash.ToString();
            var result = text.Substring(0, 6);
            return result;
        }
    }
}
