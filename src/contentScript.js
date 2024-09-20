
document.addEventListener('click', function(event) {
    let element = event.target;
    while (element && element.tagName !== 'A') {
        element = element.parentElement;
    }
    if (element && element.tagName === 'A') {
        const href = element.getAttribute('href');
        if (href && href.startsWith('mailto:')) {
            event.preventDefault();

            // メールアドレスを取得
            const mailtoParams = new URL(href);
            const emailAddress = mailtoParams.pathname;

            // chrome.storage からカスタムホスト名を取得
            chrome.storage.sync.get(['customHost'], function(result) {
                let customHost = result.customHost;
                
                // 初回起動時に customHost が設定されていない場合、ユーザーに入力を促す
                if (!customHost) {
                    customHost = prompt("Please enter your custom host (e.g., example for example.relationapp.jp):");
                    
                    // 入力が行われた場合に customHost を保存
                    if (customHost) {
                        chrome.storage.sync.set({ customHost: customHost }, function() {
                            console.log("Custom host saved as " + customHost);
                        });
                    } else {
                        alert("You must set a custom host to proceed.");
                        return; // ユーザーがキャンセルした場合、処理を中断
                    }
                }

                // 新しいURLを作成
                const newUrl = `https://${customHost}.relationapp.jp/popout/mail/new/?message_box_id=1&to=${encodeURIComponent(emailAddress)}`;

                // 新しいウィンドウのサイズと設定
                const windowFeatures = "width=1460,height=804,top=100,left=100";
                window.open(newUrl, '_blank', windowFeatures);
            });
        }
    }
}, true);
