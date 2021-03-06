using System.ComponentModel.DataAnnotations;

namespace CapExpenseTime.Data
{
    public class RegisterRequest
    {
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Password { get; set; }
        public string UserName { get; set; }

        [Compare("Password")]
        public string ConfirmedPassword
        {
            get; set;
        }
    }
}
