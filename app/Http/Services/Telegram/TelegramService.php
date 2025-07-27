<?php

namespace App\Http\Services\Telegram;

use App\Models\Blog;
use App\Models\Scheme;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class TelegramService
{

    /**
     * Handle a command for a given user.
     *
     * @param string $userId    The unique identifier of the user.
     * @param string $cmd       The command to be handled.
     * @param string $firstName The first name of the user.
     * @param string $lastName  The last name of the user.
     *
     * @return void
     */
    public function handleCammand(string $userId, string $cmd, string $firstName, string $lastName)
    {
        $message = $this->draftMessage($cmd, $firstName, $lastName);

        $this->sendMessage($userId, $message);

    }

    private function draftMessage(string $message, string $firstName, string $lastName): string
    {
        switch ($message) {

            case '/view_schemes': {
                return $this->handleViewSchemes($firstName, $lastName);
            }
            case '/view_blogs': {
                return $this->handleViewBlogs($firstName, $lastName);
            }
            case '/check_cibil': {
                return $this->handleCheckCibil();
            }
            default:
                return "Invalid request type. Please try again.";
        }
    }

    private function handleViewSchemes(string $firstName, string $lastName): string
    {

        $schemes = Scheme::orderBy('created_at')->take(10)->get();

        $message = "📋 *Hi {$firstName} {$lastName},\n here are some Emergency Credits schemes you might find useful:*\n\n";

        $message = "📋 *List of Schemes:*\n\n";

        foreach ($schemes as $index => $scheme) {

            $message .= ($index + 1) . ". **" . $scheme->title . "**\n";

            $message .= $scheme->summary . "\n";

            $link = env('FRONTEND_APP_URL') . 'schemes/' . $scheme->slug;

            $message .= "🔗 [View Details](" . $link . ")\n\n";
        }

        // Add the "follow for more" link
        $moreLink = env('FRONTEND_APP_URL') . 'schemes';

        $message .= "👉 *For more schemes, follow this link:* [Click here]($moreLink)";

        return $message;
    }

    private function handleViewBlogs(string $firstName, string $lastName): string
    {
        $blogs = Blog::orderBy('created_at')->take(10)->get();

        $message = "📝 *Latest Blog Posts:*\n\n";

        $message = "👋 *Hi {$firstName} {$lastName},\n here are some blog posts you might find useful:*\n\n";

        foreach ($blogs as $index => $blog) {

            $message .= ($index + 1) . ". **" . $blog->title . "**\n";

            $message .= $blog['summary'] . "\n";

            $link = env('FRONTEND_APP_URL') . 'schemes/' . $blog->slug;

            $message .= "🔗 [Read More](" . $link . ")\n\n";
        }

        // Add the "more blogs" link
        $moreLink = env('FRONTEND_APP_URL') . 'blogs';

        $message .= "👉 *For more blogs, visit:* [Click here]($moreLink )";

        return $message;
    }

    private function handleCheckCibil(): string
    {
        return "comming soon....";
    }

    private function sendMessage(string $userId, string $message)
    {
        $url = env('TELEGRAM_AUTH_URL').'sendMessage';

        $res = Http::post($url, [
            'chat_id' => $userId,
            'text' => $message,
        ]);

    }

}
