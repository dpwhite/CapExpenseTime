using FluentValidation;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using System.Linq;
using System.Net;
using System.Text.Json;
using System.Threading.Tasks;

namespace CapExpenseTime.Web.Middleware
{
    public class ValidationExceptionHandler
    {
        private readonly RequestDelegate _next;

        public ValidationExceptionHandler(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context, IWebHostEnvironment env)
        {
            try
            {
                await _next(context);
            }
            catch (ValidationException ex)
            {
                if (!context.Response.HasStarted)
                {
                    await HandleExceptionAsync(context, ex, env);
                }
            }
        }

        private async Task HandleExceptionAsync(HttpContext context, ValidationException exception, IWebHostEnvironment env)
        {
            var code = HttpStatusCode.BadRequest;

            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)code;
            var errorResponse = JsonSerializer.Serialize(exception.Errors.Select(m => m.ErrorMessage).ToList());
            await context.Response.WriteAsync(errorResponse);
        }
    }
}
