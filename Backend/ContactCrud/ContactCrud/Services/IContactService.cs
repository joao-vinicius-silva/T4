using ContactCrud.Model;

namespace ContactCrud.Services
{
    public interface IContactService
    {
        Task<IEnumerable<Contact>> GetAllAsync();
        Task<bool> DeleteAsync(Guid id);
        Task<bool> UpdateAsync(Contact contact);
        Task<Contact> AddAsync(Contact contact);
    }
}
