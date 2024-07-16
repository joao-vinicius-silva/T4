namespace ContactCrud.Model
{
    public class Contact
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Name { get; set; } = string.Empty;
        public int Age { get; set; } = 0;
        public int Number { get; set; } = 0;
    }
}
