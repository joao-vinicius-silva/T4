using ContactCrud.Model;
using ContactCrud.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ContactCrud.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IContactService _contactService;

        public ContactController(IContactService contactService)
        {
            _contactService = contactService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Contact>>> GetContacts()
        {
            var contacts = await _contactService.GetAllAsync();
            return Ok(contacts);
        }
        [HttpPost]
        public async Task<ActionResult<Contact>> CreateContact(Contact contact)
        {
            var newContact = await _contactService.AddAsync(contact);
            return Ok(newContact);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateContact(Contact contact)
        {
            var update = await _contactService.UpdateAsync(contact);
            return Ok(update);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContact(Guid id)
        {
            var delete = await _contactService.DeleteAsync(id);
            return Ok(delete);
        }
    }
}
