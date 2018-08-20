import AWN from 'awesome-notifications'

const options = {
  duration: 5000,
  icons: {
    alert: 'exclamation-triangle'
  }
}

let notifier = new AWN(options)

export function sendSuccessMessage (msg) {
  notifier.success(msg)
}

export function sendErrorMessage (msg) {
  notifier.alert(msg)
}

export function sendInfoMessage (msg) {
  notifier.info(msg)
}
