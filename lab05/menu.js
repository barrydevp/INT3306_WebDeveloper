let last_active = null

function onClick(target) {
    if (last_active != null) {
        last_active.className = 'portalModTd'
    }

    last_active = target
    last_active.className = 'portalModTdSelected'
    document.getElementById('content').innerHTML = last_active.innerHTML
}
