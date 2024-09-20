
document.getElementById('save').addEventListener('click', function() {
    const customHost = document.getElementById('customHost').value;

    // chrome.storageにホスト名を保存
    chrome.storage.sync.set({ customHost: customHost }, function() {
        alert('Custom host saved!');
    });
});

// ページ読み込み時に既存の設定を表示
chrome.storage.sync.get(['customHost'], function(result) {
    if (result.customHost) {
        document.getElementById('customHost').value = result.customHost;
    }
});
