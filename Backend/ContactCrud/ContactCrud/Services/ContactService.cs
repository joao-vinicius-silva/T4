using ContactCrud.Context;
using ContactCrud.Model;
using Microsoft.EntityFrameworkCore;

namespace ContactCrud.Services
{
    public class ContactService : IContactService
    {

        private readonly AppDbContext _appDbContext;

        public ContactService(AppDbContext appDbContext) { _appDbContext = appDbContext; }
        public async Task<Contact> AddAsync(Contact contact)
        {
            contact.Id = Guid.NewGuid();
            _appDbContext.Contacts.Add(contact);
            await _appDbContext.SaveChangesAsync();
            return contact;
        }

        public async Task<bool> DeleteAsync(Guid id)
        {
            var contact = await _appDbContext.Contacts.FindAsync(id);
            if (contact == null)
            {
                return false;
            }
            _appDbContext.Contacts.Remove(contact);
            await _appDbContext.SaveChangesAsync();
            return true;
        }

        public async Task<IEnumerable<Contact>> GetAllAsync()
        {
            return await _appDbContext.Contacts.ToListAsync();
        }

        public async Task<bool> UpdateAsync(Contact contact)
        {
            var findContact = await _appDbContext.Contacts.FindAsync(contact.Id);
            if (findContact == null)
            {
                return false;
            }
            
            findContact.Name = contact.Name;
            findContact.Age = contact.Age;
            findContact.Number = contact.Number;
            await _appDbContext.SaveChangesAsync();
            return true;
        }
    }
}
